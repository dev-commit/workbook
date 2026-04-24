# Хук useReducer()

::: info

- https://react.dev/reference/react/useReducer
  :::

::: danger

**`name`** -

> - `props` - props
> - _return_ - null

:::

    Даёт возможность управлять внутренним состоянием более сложного компонента с помощью редюсера. Альтернатива для useState

редюсер типа (state, action) => newState. reducer - pure function
initialArg
init
Возвращает [state, dispatch] текущее состояние в паре с методом dispatch

- Хук useReducer обычно предпочтительнее useState, когда есть сложная логика состояния, которая включает в себя несколько значений, или когда следующее состояние зависит от предыдущего
- useReducer позволяет оптимизировать производительность компонентов, которые запускают глубокие обновления, поскольку можно передавать dispatch вместо колбэков

```js
import { useReducer } from "react";

const [state, dispatch] = useReducer(reducer, initialArg, init);
```

## Примеры

### Пример #1

```js
import { useReducer } from "react";
```

```js
const SHOW_ALERT = "show";
const HIDE_ALERT = "hide";
```

```js
const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        visible: true,
        text: action.text,
      };
    case HIDE_ALERT:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
```

```js
const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: "",
  });

  const show = (text) => dispatch({ type: SHOW_ALERT, text });
  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <>
      <pre>
        <code>{JSON.stringify(state, "", 4)}</code>
      </pre>
      <button onClick={() => show("Some Text")}>Show</button>
      <button onClick={hide}>Hide</button>
    </>
  );
};
```

```js
{ "visible": false, "text": "" }           // Начальное состояние
{ "visible": true, "text": "Some Text" }   // Нажали "Show"
{ "visible": false, "text": "Some Text" }  // Нажали "Hide"
```
