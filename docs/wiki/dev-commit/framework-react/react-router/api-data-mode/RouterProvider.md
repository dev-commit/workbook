# `<RouterProvider />createBrowserRouter()`

::: info
https://reactrouter.com/api/data-routers/RouterProvider
https://reactrouter.com/api/data-routers/createBrowserRouter
:::
Отобразить пользовательский интерфейс для заданного компонента DataRouter
  
Массив роутов

Создание нового маршрутизатора данных, который будет управлять путем приложения через history.pushState и history.replaceState
Список роутов

## `<RouterProvider />`

```js
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router/dom"

const root = document.getElementById("root")

const router = createBrowserRouter([...])
ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
```

## createBrowserRouter

### Параметры "element" и "Component"

- В параметрах может быть element или Component

```ts
import { createBrowserRouter } from "react-router/dom"

const About = () => <h1>Hello world</h1>

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
	{
		path: "about",
		Component: About
	},
])
```

### Вложенные маршруты

- Маршруты могут быть вложены в родительские маршруты с помощью children
- Дочерние маршруты отображаются через &lt;Outlet/> в родительском маршруте

::: info
https://reactrouter.com/api/components/Outlet
:::

```js
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
])
```

```js
import { Outlet } from "react-router"

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
```
