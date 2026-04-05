# Observer (Наблюдатель)

## Информация

::: tip

:::

- Observer - создаёт механизм подписки, позволяющий одним объектам отслеживать и реагировать на события, происходящие в других объектах
- Основан на зависимости один ко многим: при изменении состояния объекта Observable, все зависимые объекты Observer оповещаются об этом
- Observable - наблюдаемый объект. Содержит список [Observer] и при изменении state, проходит в цикле по всем Observer и оповещает их
- [Observer] (Подписчики) - наблюдатели за Observable

## Реализация

- state - свойство, от изменения которого зависит состояние других объектов
- subscribers - список зависящих от state объектов
- subscribe() - подписка на изменения state
- unsubscribe() - отписка от изменений state
- getState() - метод для получения state
- setState() - метод для изменения state
- notify() - метод для оповещения подписчиков об изменении state

### Основная реализация

#### Класс

```js
class Observable {
  constructor() {
    this.state = "Initial Data";
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((el) => el !== subscriber);
  }
  getState() {
    return this.state;
  }
  setState(data) {
    this.state = data;
    this.notify();
  }
  notify() {
    this.subscribers.forEach((subscriber) => subscriber.update(this.state));
  }
}

class Subscriber {
  update(data) {
    console.log("Subscriber Udated Data", data);
  }
}

// Использование
const observable = new Observable();
const subscriber = new Subscriber();

observable.subscribe(subscriber);
// observable.unsubscribe(subscriber)
observable.setState("New Data");

const state = observable.getState();
console.log("Observable State", state);
```

#### Функция

```js
// Фабрика для Observable
const createObservable = () => {
  let state = 'Initial Data'
  const subscribers = []

  return {
    subscribe(subscriber) {
      subscribers.push(subscriber)
    },
    unsubscribe(subscriber) {
      subscribers = subscribers.filter(el => el !== subscriber)
    },
    getState() {
      return state
    }
    setState(data) {
      state = data
      this.notify()
    },
    notify() {
	    subscribers.forEach(subscriber => subscriber.update(state))
    },
  }
}

// Фабрика для Subscriber
const createSubscriber = () => {
  return {
    update(data) {
      console.log('Subscriber Udated Data', data)
    }
  };
}

// Использование
const observable = createObservable()
const subscriber = createSubscriber()

observable.subscribe(subscriber)
// observable.unsubscribe(subscriber)
observable.setState('New Data')

const state = observable.getState()
console.log('Observable State', state)
```

### Релизация с action.type

```js
class Observable {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((el) => el !== subscriber);
  }
  notify(action) {
    this.subscribers.forEach((el) => el.update(action));
  }
}

class Subscriber {
  constructor(state = 1) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action.type) {
      case "INCREMENT":
        this.state = ++this.state;
        break;
      case "DECREMENT":
        this.state = --this.state;
        break;
      case "ADD":
        this.state += action.payload;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

const observable = new Observable();
const subscriber = new Subscriber();

observable.subscribe(subscriber);

observable.notify({ type: "INCREMENT" }); // => 2
observable.notify({ type: "DECREMENT" }); // => 0
observable.notify({ type: "ADD", payload: 10 }); // => 11

console.log(subscriber.state);
```
