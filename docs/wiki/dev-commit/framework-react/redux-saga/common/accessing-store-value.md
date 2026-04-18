# Доступ к значению Store из Saga

sagas.js

```js
// Данные из Селектора
import { select } from "redux-saga/effects"

export function* setCurrentStepAsync() {
    const isTimer: boolean = yield select(getTimerSelector)
}
```

```js
// Данные напрямую из Store
import { store } from "./store"

export function* setCurrentStepAsync() {
    const isTimer = store.getState().playground.isTimer
}
```

selectors.js

```js
import { createSelector } from "reselect"

const getTimer = (state) => state.playground.isTimer
export const getTimerSelector = createSelector(getTimer, (state) => state)
```

store.js

```js
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        playground: playgroundReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})
```
