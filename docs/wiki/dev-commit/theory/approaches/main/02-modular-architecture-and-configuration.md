# Модульная архитектура + конфигурация

**Модульная архитектура** — стиль проектирования, где система собирается из независимых модулей (feature‑пакетов), каждый из которых решает ограниченную задачу и имеет чёткий публичный API. **Конфигурация** позволяет адаптировать модуль под конкретное приложение без изменения его исходников.

## Идея

- **Модуль** содержит переиспользуемую логику (сервисы, ресурсы, UI‑заготовки) и определяет контракты расширения.
- **Приложение** подключает модуль и **поставляет конфигурацию** (темизация, подмена реализаций, брендинговые различия, включение/выключение фич).

## Почему это полезно

- Один и тот же модуль можно использовать в нескольких продуктах.
- Разные приложения могут иметь разный UI/поведение при одном ядре.
- Обновление бизнес‑логики в модуле распространяется на все приложения.

## Что важно продумать

- **Границы**: что считается публичным API модуля, а что — внутренностями.
- **Совместимость**: как модуль эволюционирует без ломания интеграций.
- **Конфигурационные контракты**: чем именно можно управлять (и чем нельзя).

## Частые ошибки

- “Модуль всё знает про приложение”: утечка специфики бренда/продукта в общий пакет.
- “Конфиг без типов”: конфигурации без контрактов приводят к runtime‑ошибкам и расхождениям.

## Простой пример

Модуль отдаёт функцию, а приложение “подкручивает” поведение через конфиг:

```ts
type EmailModuleConfig = {
  from: string;
  transport: (to: string, body: string) => Promise<void>;
};

export function createEmailModule(config: EmailModuleConfig) {
  return {
    async sendWelcome(to: string) {
      const body = `Hello! From: ${config.from}`;
      await config.transport(to, body);
    },
  };
}

// В приложении:
const email = createEmailModule({
  from: 'noreply@example.com',
  transport: async (to, body) => { /* отправка через SMTP/HTTP */ },
});
```

## Сравнение

### 1) “По‑простому” (жёстко зашито в код)

```ts
async function sendWelcomeEmail(to: string) {
  // жёстко зашитые детали: from + транспорт + шаблон
  const from = 'noreply@example.com';
  const body = `Hello! From: ${from}`;
  await fetch('https://api.example.com/send', {
    method: 'POST',
    body: JSON.stringify({ to, from, body }),
  });
}
```

### 2) По подходу (модуль + конфигурация)

```ts
type EmailModuleConfig = {
  from: string;
  transport: (to: string, from: string, body: string) => Promise<void>;
};

function createEmailModule(cfg: EmailModuleConfig) {
  return {
    sendWelcome: (to: string) => cfg.transport(to, cfg.from, `Hello! From: ${cfg.from}`),
  };
}

const email = createEmailModule({
  from: 'noreply@example.com',
  transport: async (to, from, body) => { /* SMTP/HTTP/мок */ },
});
```

