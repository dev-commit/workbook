# `<Outlet />`

::: info
https://reactrouter.com/api/components/Outlet
:::

    Отображает соответствующий дочерний маршрут родительского маршрута или ничего, если ни один дочерний маршрут не соответствует

```js
import { Outlet } from "react-router"

const App = () => {
  return (
    <div>
      <h1>Parent Content</h1>
      <Outlet />
    </div>
  )
}
```
