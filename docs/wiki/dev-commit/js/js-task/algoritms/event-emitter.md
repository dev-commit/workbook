# 👿 EventEmitter

## Мой вариант

```js
const ee = {
  listeners: Object.create({}),
  on(event, handler) {
    if (event in this.listeners) {
      this.listeners[event] = [...this.listeners[event], handler];
    } else {
      this.listeners[event] = [handler];
    }
  },
  emit(event) {
    if (this.listeners[event] && this.listeners.hasOwnProperty(event)) {
      this.listeners[event].forEach((handler) => {
        handler();
      });
    }
  },
};

ee.on("myEvent", () => console.log("hello"));
ee.on("myEvent", () => console.log("hello 2"));
ee.emit("myEvent"); // hello hello 2
ee.emit("myEvent"); // hello hello 2

ee.emit("blabla");
ee.emit("toString");
```

## Вариант из системы

```js
const EventEmitter = {
  events: {},

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = { listeners: [] };
    }
    this.events[event].listeners.push(listener);
  },

  off(event) {
    delete this.events[event];
  },

  emit(name, ...payload) {
    const listeners = this.events[name] ? this.events[name].listeners : [];

    for (const listener of listeners) {
      listener.apply(this, payload);
    }
  },
};
```

## #1

```js
function EventEmitter() {
  this.listeners = Object.create(null);
}

EventEmitter.prototype.emit = function (event) {
  if (this.listeners[event]) {
    for (let i = 0; i < this.listeners[event].length; i++) {
      this.listeners[event][i]();
    }
  }
};

EventEmitter.prototype.addEventListener = function (event, handler) {
  this.listeners[event] = this.listeners[event]
    ? [...this.listeners[event], handler]
    : [handler];
};

EventEmitter.prototype.removeEventListener = function (event, handler) {
  if (this.listeners[event]) {
    delete this.listeners[event];
  }
};

const emitter = new EventEmitter();
emitter.emit("zzz");
emitter.addEventListener("click", () => {});

// .emit('zzz');
// .addEventListener('zzz', listener);
// .removeEventListener('zzz', listener);
```

## #2

<!-- Гришанович -->

```js
class EventEmitter {
  // on(type: string, listener: Function)
  // off(type: string, listener: Function)
  // emit(type: string)
  constructor() {
    this.events = Object.create(null);
  }

  on(type, listener) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(listener);
  }
  off(type, listener) {
    this.events[type] = this.events[type].filter((item) => item !== listener);
  }

  emit(type) {
    if (!this.events[type]) return;
    for (let func of this.events[type]) {
      func();
    }
  }
}

const e = new EventEmitter();
e.emit("toString");
```

## #3

<!-- Кара -->

```js
class EventEmitter {
  constructor() {
    this.map = Object.create(null);
  }

  on(event, fn) {
    if (typeof fn === "function") {
      this.map[event] ? this.map[event].push(fn) : (this.map[event] = [fn]);
    } else {
      console.log("Нужно больше функций");
    }
  }

  emit(event) {
    if (this.map[event]) {
      this.map[event].forEach((fn) => fn());
    }
  }
}

const eventEmitter = new EventEmitter();

eventEmitter.on("someEvent", () => console.log("abc"));
eventEmitter.on("someEvent", () => console.log("def"));
eventEmitter.on("someEvent", "Hello");

eventEmitter.emit("toString");
eventEmitter.emit("someEvent"); // abc, def
eventEmitter.emit("no-event");
```

## #4

<!-- Матвеев -->

```js
function Emitter() {
  this.listeners = Object.create(null);
}

Emitter.prototype.on = function (event, cb) {
  if (typeof cb !== "function") {
    return;
  }
  if (!this.listeners[event]) {
    this.listeners[event] = [];
  }
  this.listeners[event].push(cb);
};
Emitter.prototype.emit = function (event, ...rest) {
  if (!this.listeners[event]) {
    return;
  }
  for (let func of this.listeners[event]) {
    func(...rest);
  }
};

const a = new Emitter();
```
