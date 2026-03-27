# Dependency Injection (DI) и Inversion of Control (IoC)

**Dependency Injection (DI)** — архитектурный паттерн, где объект не создаёт зависимости сам, а получает их “снаружи”. Обычно этим управляет **DI‑контейнер**. DI является практическим способом реализовать **Inversion of Control (IoC)** — инверсию контроля (когда код “пользователя” не управляет вручную всем графом создания объектов).

## Что даёт DI

- **Слабая связанность**: компонент зависит от абстракций/контрактов, а не от конкретных классов.
- **Конфигурируемость**: разные реализации легко подменять по окружению/продукту.
- **Тестируемость**: зависимости можно заменять моками без изменения кода потребителя.

## Базовые элементы DI‑системы

- **Токены/идентификаторы**: ключи, по которым контейнер находит зависимость.
- **Провайдеры**: правила создания (value/class/factory).
- **Модули**: способ группировать провайдеры и импортировать другие модули.
- **Инъекция**: получение зависимости (через конструктор, поле, функцию `inject`, и т.п.).

## Где DI особенно уместен

- Платформы и большие приложения с множеством модулей.
- Системы, где нужно изолировать инфраструктуру (HTTP, storage, analytics) от доменной логики.

## Риски

- Слишком “магический” контейнер может усложнить отладку.
- Плохая дисциплина токенов/скоупов приводит к неожиданным синглтонам, утечкам и циклам зависимостей.

## Простой пример

Мини‑“контейнер”: регистрируем зависимости и получаем их по ключу:

```ts
type Token<T> = string & { __type?: T };
const token = <T>(name: string) => name as Token<T>;

class Container {
  private readonly map = new Map<string, unknown>();
  provide<T>(t: Token<T>, value: T) { this.map.set(t, value); }
  get<T>(t: Token<T>): T { return this.map.get(t) as T; }
}

type Clock = { now: () => Date };
const CLOCK = token<Clock>('CLOCK');

const c = new Container();
c.provide(CLOCK, { now: () => new Date() });

function greet(container: Container) {
  const clock = container.get(CLOCK);
  return `Hi! Time: ${clock.now().toISOString()}`;
}
```

## Сравнение

### 1) “По‑простому” (создаём зависимости внутри)

```ts
class Clock {
  now() { return new Date(); }
}

class Greeter {
  private clock = new Clock(); // жёсткая зависимость
  greet() {
    return `Hi! Time: ${this.clock.now().toISOString()}`;
  }
}
```

### 2) По подходу (DI: зависимость приходит извне)

```ts
type Clock = { now: () => Date };

class Greeter {
  constructor(private clock: Clock) {}
  greet() {
    return `Hi! Time: ${this.clock.now().toISOString()}`;
  }
}

const greeter = new Greeter({ now: () => new Date(0) }); // легко тестировать
```

