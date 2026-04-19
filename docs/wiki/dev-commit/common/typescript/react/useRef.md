# useRef

```js
const ref = useRef<HTMLButtonElement>(null)
const ref = useRef<HTMLDivElement>(null)
const ref = useRef<HTMLInputElement>()
const ref = useRef<number>()
```

## HTMLInputElement

```js
import * as React from 'react'

const App = () => {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])

  return <input ref={ref} />
}

export default App
```
