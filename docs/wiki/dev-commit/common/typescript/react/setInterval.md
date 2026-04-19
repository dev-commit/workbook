# React useRef setInterval

```js
import { useEffect, useRef } from "react"

const App = () => {
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    refreshIntervalId.current = setInterval(() => {
      //
    }, 1000)

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [])

  return ()
}
```
