# put

- **put** - вместо отправления действий (dispatch action) внутри функции-генератора, put возвращает объект с инструкциями для промежуточного слоя (middleware) - отправить действие
- Вызов Action, который поменяет State

```js
import { put } from 'redux-saga/effects'
```

```js
yield put(setLoading(true))
```
