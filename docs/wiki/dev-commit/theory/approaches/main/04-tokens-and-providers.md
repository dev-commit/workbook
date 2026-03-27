# Токены и провайдеры (token-based DI)

Во многих DI‑контейнерах зависимости идентифицируются не “типом”, а **токеном** — уникальным ключом (строка/символ/объект), который служит именем контракта. **Провайдер** описывает, как контейнер должен получить значение по токену.

## Зачем нужны токены

- Разделяют **контракт** (что нужно) и **реализацию** (как сделать).
- Упрощают подмены: можно подложить другую реализацию в другом модуле/окружении.
- Делают зависимости явными и адресуемыми (особенно когда несколько реализаций одного типа).

## Типовые виды провайдеров

- **Value provider**: токен → конкретное значение (конфиг, константа).
- **Class provider**: токен → класс (контейнер создаёт экземпляр).
- **Factory provider**: токен → фабрика (контейнер вызывает функцию и передаёт её зависимости).

## Практика проектирования токенов

- Токен должен называться как **доменный контракт**, а не как конкретная реализация.
- Лучше иметь отдельные токены для:
  - конфигураций;
  - сервисов (поведение);
  - UI‑точек встраивания (компоненты/слоты).

## Типичные проблемы

- “Всё один токен”: слишком крупные токены размывают ответственность и делают подмены опасными.
- “Случайные конфиги”: если конфиг‑токены не типизированы и не документированы, интеграции начинают ломаться при изменениях.

## Простой пример

Один контракт (`PAYMENTS_API`) и две реализации, выбираемые на этапе конфигурации:

```ts
type Token<T> = symbol & { __type?: T };
const createToken = <T>() => Symbol() as Token<T>;

type PaymentsApi = { pay: (amount: number) => Promise<string> };
const PAYMENTS_API = createToken<PaymentsApi>();

type Provider<T> = () => T;
const providers = new Map<symbol, Provider<unknown>>();

function provide<T>(t: Token<T>, p: Provider<T>) { providers.set(t, p); }
function inject<T>(t: Token<T>): T { return (providers.get(t) as Provider<T>)(); }

provide(PAYMENTS_API, () => ({ pay: async (a) => `fake-${a}` })); // dev
// provide(PAYMENTS_API, () => realPaymentsClient);               // prod

const api = inject(PAYMENTS_API);
api.pay(100).then(console.log);
```

## Сравнение

### 1) “По‑простому” (прямой импорт/создание реализации)

```ts
class RealPaymentsApi {
  async pay(amount: number) { return `tx-${amount}`; }
}

async function checkout(amount: number) {
  const api = new RealPaymentsApi(); // зашито
  return api.pay(amount);
}
```

### 2) По подходу (токен + провайдер)

```ts
type PaymentsApi = { pay: (amount: number) => Promise<string> };

function checkout(api: PaymentsApi, amount: number) {
  return api.pay(amount);
}

const devApi: PaymentsApi = { pay: async (a) => `fake-${a}` };
checkout(devApi, 100).then(console.log);
```

