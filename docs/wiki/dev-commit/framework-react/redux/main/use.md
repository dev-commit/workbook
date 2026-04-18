# Redux

## Методы

```js
const store = createStore(reducerFunction); // создание store
store.getState();                           // получить состояние store
store.subscribe();                          // подписка на изменение store
store.dispatch({                            // событие обновления состояния store
    type: 'НазваниеСобытия', 
    payload: 'Данные' 
});
```

## Пример использования

```js
// 1. STORE (создание store)
import { createStore } from 'redux';
const store = createStore(changeStore);

// 2. REDUCER
function changeStore(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}

// 3. COMPONENT (подписка и получение состояния store)
store.subscribe(() => {
    console.log(store.getState());
});

// 4. COMPONENT (обновление состояния store)
store.dispatch({ type: 'ADD_PRODUCT', payload: 'Product1' });
store.dispatch({ type: 'ADD_PRODUCT', payload: 'Product2' });
```

#### Данные, которые вернет "action" в "changeStore"

```js
{type: "@@redux/INITn.9.1.1.y.1"}          // всегда когда redux инициализирован
{type: "ADD_PRODUCT", payload: "Product1"} // добавленный action
```
