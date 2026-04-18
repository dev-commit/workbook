# Middleware

```js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { ping } from './enhancers/ping';

export default createStore(rootReducer, applyMiddleware(ping));
```

```js
export const ping = function ping(store) {
    return function (next) {
        return function (action) {
            console.log('Type: '+action.type);               // => Type: ADD_VALUE
            console.log('Payload: '+action.payload.myValue); // => Payload: New Value
            return next(action);
        };
    };
};
```
- store - redux-store приложения
- next - функция-обертка, которая позволяет продолжить выполнение цепочки
- action - действие, которое было вызвано (это store.dispatch)
