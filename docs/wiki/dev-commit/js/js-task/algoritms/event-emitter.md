# EventEmitter

::: warning

- Проверить код

:::

## Информация

- _Задача_: реализовать EventEmitter - подписка на событие `on`, отписка `off`, вызов обработчиков события `emit`

## Решение

```js
class EventEmitter {
  constructor() {
    // Событие → массив обработчиков. В Map нет ключей из прототипа,
    // поэтому emit("toString") не найдёт Object.prototype.toString
    this.events = new Map();
  }

  on(event, listener) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(listener);
  }

  off(event, listener) {
    const listeners = this.events.get(event);
    if (!listeners) return;

    // Новый массив без отписанного обработчика: emit, который уже идёт,
    // перебирает старый массив и не собьётся
    this.events.set(
      event,
      listeners.filter((item) => item !== listener),
    );
  }

  emit(event, ...args) {
    const listeners = this.events.get(event) ?? [];
    listeners.forEach((listener) => listener(...args));
  }
}

const emitter = new EventEmitter();
const hello = (name) => console.log(`hello ${name}`);

emitter.on("greet", hello);
emitter.on("greet", () => console.log("hello 2"));
emitter.emit("greet", "Tony"); // hello Tony, hello 2

emitter.off("greet", hello);
emitter.emit("greet", "Tony"); // hello 2

emitter.emit("toString"); // Ничего не происходит: обработчиков нет
```

- `off` удаляет только переданный обработчик, остальные обработчики события остаются
- `emit` передаёт обработчикам аргументы: `emit("greet", "Tony")` → `hello("Tony")`
