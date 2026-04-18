# call

- **call** - вернет только объект описывающий эту операцию и redux-saga сможет позаботиться о вызове и возвращении результатов в функцию-генератор
- Вызов API

```js
import { call } from 'redux-saga/effects'
```

### Вызов

```js
const { data } = yield call(request.get, Account.Get)
```

### Вызов другого генератора без аргументов

```js
yield call(getData)

export function* getData() {
  //
}
```

### Вызов другого генератора с 1 аргументом

```js
yield call(getData, 'Hello')

export function* getData(a: string) {
  //
}
```
