# `util`

## Информация

::: tip Определение

- **util** - модуль служебных функций: `inherits()`, `promisify()`, `format()` и др. На этой странице - наследование событий через `util.inherits()`

:::

```js
const events = require("events"); // Модуль отслеживания событий
const util = require("util"); // Модуль служебных функций
```

## Использование

```js
class Cars {
  constructor(model) {
    this.model = model;
  }
}

// Наследование событий для всех объектов, созданных на основе Cars
util.inherits(Cars, events.EventEmitter);

const car = new Cars("BMW");

car.on("speed", (speed) => {
  console.log(speed);
});

car.emit("speed", "254km");

// => 254km
```

::: warning

- `util.inherits()` - устаревший способ наследования (Legacy), документация Node.js не рекомендует его использовать. Вместо него - `class Cars extends EventEmitter`

:::
