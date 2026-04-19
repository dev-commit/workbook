# CSSProperties

```js
const App = () => {
    return (
        <Child style={{top: 10, left: 10 }} />
    )
}
```

```js
import { CSSProperties } from "react"

interface IChildProps {
    id: string
    style?: CSSProperties
}

const Child: React.FC = (props) => {
    const { style } = props

    return (
        <div style={style}></div>
    )
}
```
