# `<Routes /><Route />`

::: info
https://reactrouter.com/api/components/Routes
https://reactrouter.com/api/components/Route
:::

  Группировка роутов
  
Список &lt;Route&gt;

  Отображение UI, следит чтобы совпадали пути между компонентом и адресной строкой.
  Route технически является компонентом, но не создаёт DOM-элемента
  
Любой действительный URL-путь или массив путей
Компонент React для рендеринга только при совпадении местоположения

## Примеры

```js
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
