# events

- **events** - модуль отслеживания событий

```js
const EventEmitter = require('events');
```

```js
const emitter = new EventEmitter();

// Обработчик событий
emitter.on('SomeEvent', (data) => {
    console.log(data);
});

// Вызов события
emitter.emit('SomeEvent', 'Hello');
```

### Наследование

```js
const EventEmitter = require('events');

class Dispatcher extends EventEmitter {
    subscribe(eventName, callback) {
        console.log('subscribe');
        this.on(eventName, callback);
    }

    dispatch(eventName, data) {
        console.log('dispatch');
        this.emit(eventName, data);
    }
}

const dispatcher = new Dispatcher();

dispatcher.subscribe('event1', data => {
    console.log('on', data);
})

dispatcher.dispatch('event1', 'Hello');
```
