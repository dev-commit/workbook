# `<BrowserRouter />`

## Информация

::: info

- https://reactrouter.com/api/declarative-routers/BrowserRouter

:::

::: danger

**`<BrowserRouter />`** - роутер. Использует html5 history api и следит за тем чтобы UI был синхронизирован с тем что написано в адресной строке. BrowserRouter технически является компонентом, но не создаёт DOM-элемента

> - `basename` - базовый URL для всех местоположений. Если ваше приложение обслуживается из подкаталога на вашем сервере, вам нужно установить это в подкаталог. Правильно отформатированное базовое имя должно иметь косую черту в начале, но не в конце

:::

## Пример

```js
import { BrowserRouter, Link, Routes, Route } from "react-router";

const App = () => (
  <BrowserRouter basename="/root/">
    <Link to="/about">About</Link>
    <Routes>
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
```
