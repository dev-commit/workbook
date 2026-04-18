# createStore

    Создание store
    
функция-обработчик изменений (редьюсер)
начальное состояние
берет входные данные и передает дальше

```js
import { createStore } from 'redux';
import rootReducer from './reducers';

export const store = createStore(rootReducer);
```

::: info
https://github.com/reduxjs/redux/blob/master/src/createStore.ts
:::

## Упрощённая реализация

- state - свойство, от изменения которого зависит состояние других объектов
- action - объект с полями"type" и payload
- subscribers - список зависящих от state объектов
- subscribe - подписка на изменения state
- getState - геттер для получения state
- dispatch - изменение state
- reducer - функция, которая будет использоваться для изменения state при вызове dispatch

### createStore()

```js
const createStore = (reducer, initialState) => {
    let state = reducer(initialState, { type: '@@redux/INIT' });
    let subscribers = [];

    return {subscribe(subscriber) {
            // Добавление нового подписчика в список
            subscribers.push(subscriber);
            // Возвращает функцию для удаления подписчика
            return () => {
                subscribers = subscribers.filter(el => el !== subscriber);
            };
        },getState() {
            return state;
        },dispatch(action) {
            // Передается предыдущее состояние и action. Возвращается новое состояние
            state = reducer(state, action);
            // Уведомление подписчиков об изменении состояния
            subscribers.forEach(el => el())
        },
    }
}
```

### Пример использования

```js
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }   
}

// Создание store
const store = createStore(counterReducer, 0);

// Создание подписчика
const subscriber = () => {
  console.log('Current state:', store.getState());
};

// Подписка на изменение состояния
const unsubscribe = store.subscribe(subscriber);

// Изменение state
store.dispatch({ type: 'INCREMENT' }); // => 1
store.dispatch({ type: 'DECREMENT' }); // => 0

// Удаление подписчика
unsubscribe();

// No output - подписчик уже удален
store.dispatch({ type: 'INCREMENT' });
```
