# useLocation()

::: info
https://reactrouter.com/api/hooks/useLocation
:::

  Возвращает текущее значение Location. Это может быть полезно, если вы хотите выполнить какой-либо Side Effect при каждом изменении значения

```js
import { useLocation } from "react-router"

const App = () => {
  let location = useLocation()

  return null
}
```
