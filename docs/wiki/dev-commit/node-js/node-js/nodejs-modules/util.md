# util

- **util** - модуль наследования событий для объекта

```js
const events = require('events'); // модуль отслеживания событий
const util = require('util');     // модуль наследования событий для объекта
```

```js
class Cars {
    constructor(model) {
        this.model = model;
    }
}

// наследование событий для всех объектов, созданных на основе cars
util.inherits(Cars, events.EventEmitter);

const car = new Cars('BMW');

car.on('speed', (speed) => {
    console.log(speed);
});

car.emit('speed', '254km');

// => 254km
```
