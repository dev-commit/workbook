# Middleware

- **Middleware** - (посредник) — функция, которая вызывается при передаче действия ещё до того, как это действие попадёт в reducer и store.
- Активировать middleware можно с помощью Redux функции applyMiddleware. Она берёт middleware, которое мы хотим зарегистрировать, и возвращает функцию, которая, в свою очередь, берёт функцию createStore. Затем эта вторая функция создаёт для нас store с уже включённым в него middleware
- Middleware - шаблонный способ подцепления к actions, отправляемым в redux store
- Middleware - функции, которые перехватывают действия
- Суть middleware функций, взять входные данные, добавить что-то и передать дальше. Middleware - это всегда функция, которые обычно возвращают функцию, если только целью middleware не является прервать цепочку вызовов
- Применение: логгирование, обработка исключений, модифицирование действий, кэширование результатов и изменения способа и времени попадания действия в store
- Промежуточные слои (middlewares). Промежуточный слой это кусок кода, который выполняется после отправки действия, но перед вызовом редюсера. Промежуточные слои могут соединяться в цепочку вызовов для различной обработки действия (action), но на выходе обязательно должен быть простой объект (действие)

---

## Параметры

- store объект с методами getState, dispatch и т.д.
- next функция, принимающая action и вызывающая reducer
- action передаваемый action c type и payload

```js
const starterMiddleware = store => next => action => {
    // action           => { type: "NAME", payload: "Tony" }  - Action
    // store.getState() => { reducerStarter: { name: "" } }   - Prev State

    // Вызывается Reducer
    const nextState = next(action);

    // store.getState() => { reducerStarter: { name: "Tony" } }   - New State

    return nextState;
}
```

## Варианты записи

#### Стрелочная фукнкция

```js
const starterMiddleware = store => next => action => {
    //
    return next(action)
}
```

#### Обычная функция

```js
const logger = (store) => {
    return function (next) {
        return function (action) {
        	//
        	return next(action)
        }
    }
}
```

## Примеры

### Middleware Logger

```js
const logger = (store) => {
    return function (next) {
        return function (action) {
            console.log('Action', action);
            console.log('Prev State', store.getState());

            const nextState = next(action);
            console.log('New State', store.getState());
            return nextState;
        }
    }
}
```

### Middleware Forbidden Words

```js
const forbiddenWords = (store) => {
    return function (next) {
        return function (action) {
            const forbidden = ['Jack'];

            if (action.type === NAME) {
                const found = forbidden.filter(w => action.payload.includes(w))
                if (found.length) {
                    return store.dispatch(setName('NoName'));
                }
            }

            return next(action);
        }
    }
}
```
