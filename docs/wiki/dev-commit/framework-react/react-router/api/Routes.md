# `<Routes /><Route />`

## Информация

::: info

- https://reactrouter.com/api/components/Routes
- https://reactrouter.com/api/components/Route

:::

::: danger

**`<Routes />`** - группировка роутов

> - `children` - Список `<Route>`

:::

::: danger

**`<Route />`** - отображение UI, следит чтобы совпадали пути между компонентом и адресной строкой. Route технически является компонентом, но не создаёт DOM-элемента

> - `path` - любой действительный URL-путь или массив путей
> - `element` - компонент React для рендеринга только при совпадении местоположения

:::

## Пример

```jsx
import { Routes, Route } from "react-router"

const App = () = (
  <Routes>
    <Route path="/"          element={<Home />} />
    <Route path="about"      element={<About />} />
    <Route path="params/:id" element={<Params />} />
    <Route path="*"          element={<NotFound />} />
  </Routes>
)
```
