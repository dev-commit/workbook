# createSlice()

::: info
https://redux-toolkit.js.org/api/createSlice
:::

  Автоматически генерирует "Action Creators" и "Action Types", соответствующие reducers и state. Внутри он использует createAction и createReducer, и библиотеку Immer для написания «mutating» неизменяемых обновлений
  
Название slice
Начальное состояние
Объект функций-reducer

## Изменение state

- Для RTK не работает обновление state через присвоение нового объекта
- TRK использует Immer в реализации createReducer и как следствие в createSlice, что позволяет писать более простую логику обновления неизменяемых данных с помощью синтаксиса «мутации»
- createReducer входит в createSlice, поэтому логика аналогичная

::: info
https://redux-toolkit.js.org/usage/immer-reducers
https://immerjs.github.io/immer/
:::

## Пример

./store/slices

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    // Работает: оптимальный вариант
    changeValue1: (state) => {
      state.value = 1
    },

    // Не работает: корректно только для Redux, а в RTK используется Immer
    changeValue2: (state) => {
      state = {
        ...state,
        value: 2,
      }
    },

    // Работает
    changeValue3: (state) => {
      return {
        ...state,
        value: 3,
      }
    },
  },
})
```

./App

```js
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { changeValue1, changeValue2, changeValue3 } from "./store/slices"

const App = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(changeValue1())}>changeValue1</button>
      <button onClick={() => dispatch(changeValue2())}>changeValue2</button>
      <button onClick={() => dispatch(changeValue3())}>changeValue3</button>
      {state.value}
    </div>
  )
}
```
