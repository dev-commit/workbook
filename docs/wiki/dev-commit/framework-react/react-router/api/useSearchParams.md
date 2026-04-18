# useSearchParams()

::: info
https://reactrouter.com/api/hooks/useSearchParams
:::

  Предоставляет доступ к параметрам поиска (значение, следующее за символом ? в URL-адресе)

```js
import { useSearchParams } from "react-router"

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  setSearchParams("?tab=1")
  const tab = searchParams.get("tab")

  return null
}
```
