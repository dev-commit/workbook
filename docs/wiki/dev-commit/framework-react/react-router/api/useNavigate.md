# useNavigate()

::: info
https://reactrouter.com/api/hooks/useNavigate
:::

  Программная навигация по странице

```js
navigate('/about') // на конкретную страницу (about)
navigate(-1)       // на 1 страницу назад
navigate(-2)       // на 2 страницы назад
```

```js
import { BrowserRouter, Link, Routes, Route, useNavigate } from "react-router"

const Navigate = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1);
  }

  return <button onClick={handleClick}>Click</button>
}

const App = () => (
  <BrowserRouter>
    <Link to="/navigate">Navigate</Link>

    <Routes>
      <Route path="navigate" element={<Navigate />} />
    </Routes>
  <BrowserRouter/>
)
```
