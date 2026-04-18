# useParams()

::: info
https://reactrouter.com/api/hooks/useParams
:::

  Чтение параметров URL

```js
import { BrowserRouter, Link, Routes, Route, useParams } from "react-router"

const Params = () => {
  const params = useParams();
  console.log(params.id); // => 42

  return <h1>Params</h1>;
}

const App = () => (
  <BrowserRouter>
    <Link to="/params/42">Params</Link>

    <Routes>
      <Route path="params/:id" element={<Params />} />
    </Routes>
  <BrowserRouter/>
)
```
