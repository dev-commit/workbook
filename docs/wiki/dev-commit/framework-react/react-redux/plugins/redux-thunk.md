# redux-thunk

- Добавление асинхронного кода в actions
- Если action creator возвращает функцию - она выполняется. Если возвращает простой объект - передается дальше
- В цепочке middleware есть доступный метод dispatch и getState
- redux-thunk позволяет генератору действия (action creator) отправлять функцию в дополнении к объекту, конвертируя таким образом генератор действия в преобразователь.

npm i --save redux-thunk

## Использование

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
```

```js
import axios from 'axios';
import { ASYNC_PENDING, GET_REQUEST_TIMEOUT } from './actionTypes';

// может быть несколько dispatch
export const getAsyncData = () => dispatch => {
    
    // синхронное действие
    dispatch({
        type: ASYNC_PENDING
    })

    // асинхронный запрос на сервер
    axios.get('https://yandex.ru/')
        .then(response => {
            dispatch({
                type: ASYNC_SUCCESS,
                payload: response.data,
            })
        })
        .catch(error => console.log(error));

    // асинхронный setTimeout
    setTimeout(() => {
        dispatch({
            type: GET_REQUEST_TIMEOUT,
            payload: [1, 2, 3, 4, 5],
        })
    }, 5000)
};
```

### Асинхронная функция

```js
export const getAsyncData = () => {
    return async dispatch => {
        const response = await fetch('')
        const json = await response.json()
        dispatch({
            type: 'ASYNC_SUCCESS',
            payload: json
        })
    }
}
```

## Варианты написания

#### Стрелочная функция

```js
const getAsyncData = () => (dispatch) => {
    //
};
```

#### Обычная функция

```js
const getAsyncData = function() {
    return function(dispatch) {
        //
    }
}
```
