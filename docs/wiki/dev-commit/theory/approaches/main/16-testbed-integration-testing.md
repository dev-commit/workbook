# Testbed: интеграционные тесты с DI‑контейнером

**Integration testing** во фронтенд‑платформах часто требует поднять не только отдельную функцию, но и “минимальный рантайм”: DI‑контейнер, модули, конфигурации и жизненный цикл. Для этого используют **testbed** — вспомогательный слой, который собирает тестовое окружение так же, как это делает реальное приложение.

## Зачем нужен testbed

- Воспроизвести реальный граф зависимостей (модули, providers, bootstrap‑шаги).
- Дать удобные механизмы подмен:
  - override value/class/factory,
  - override module,
  - настройка initial providers.
- Гарантировать “чистоту” между тестами (reset/cleanup).

## Что важно в таких тестах

- Тестировать **контракты** и сценарии, а не детали реализации.
- Делать подмены точечно, чтобы тест оставался близким к production‑сборке.
- Следить за скоупами: request‑scope в runtime часто отличается от singleton‑сборки.

## Риски

- Слишком “толстые” тесты могут быть медленными.
- Если testbed скрывает слишком много, отладка может стать сложнее — нужна прозрачная диагностика сборки контейнера.

## Простой пример

Мини‑testbed: собираем зависимости и разрешаем переопределения для теста:

```ts
type Deps = {
  now: () => number;
  getUser: (id: string) => Promise<{ id: string; name: string }>;
};

function createTestbed(overrides: Partial<Deps> = {}): Deps {
  const base: Deps = {
    now: () => Date.now(),
    getUser: async (id) => ({ id, name: 'Alice' }),
  };
  return { ...base, ...overrides };
}

// тест
const tb = createTestbed({ now: () => 123 });
tb.getUser('u1').then((u) => console.log(tb.now(), u.name));
```

## Сравнение

### 1) “По‑простому” (ручная сборка в каждом тесте)

```ts
// каждый тест вручную создаёт зависимости и легко забывает “часть рантайма”
const now = () => 123;
const getUser = async (id: string) => ({ id, name: 'Alice' });

getUser('u1').then((u) => console.log(now(), u.name));
```

### 2) По подходу (testbed для сборки + override)

```ts
const tb = createTestbed({
  now: () => 123,
  getUser: async (id) => ({ id, name: `Test-${id}` }),
});

tb.getUser('u1').then((u) => console.log(tb.now(), u.name));
```

