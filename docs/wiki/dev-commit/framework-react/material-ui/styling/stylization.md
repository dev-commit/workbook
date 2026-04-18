# Стилизация

- className
- classes
- sx

## ИспользованиеclassName

- Material UI завязан на CSS-in-JS библиотеке Emotion
- При использовании CSS-in-JS, стили будут ниже и смогут переопределить стандартные стили: css-injection-order, stylesprovider

- Если использовать Material UI с обычными CSS-modules, то стили, прокинутые в компоненты Material UI не будут применяться, т.к. они будут располагаться выше, чем стандартные стили Material UI
- Для фикса, нужно обернуть приложение в &lt;StyledEngineProvider&gt; с props injectFirst
- https://mui.com/material-ui/guides/interoperability/#css-injection-order

- Проблема возникает только при добавлении опции "jsxImportSource" в tsconfig.json
- Если опция не добалена, то нет необходимости использовать StyledEngineProvider

```json
{
    "compilerOptions": {
        "jsxImportSource": "@emotion/react",
    },
}
```

./src/main.jsx

```js
import ReactDOM from "react-dom/client"
import { StyledEngineProvider } from "@mui/material/styles"

import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
    <StyledEngineProvider injectFirst>
        <App />
    </StyledEngineProvider>,
)
```

./App.jsx

```js
import Button from "@mui/material/Button"
import styles from "./styles.module.css"

const App = (props) => {
    const { children, className = "" } = props

    return (
        <Button className={styles.button}>
            Click
        </Button>
    )
}

export default App
```

./styles.module.css

```js
.button {
    color: white;
    background-color: yellowgreen;
}
```

## Использование Emotion + Typescript

- Для использования Emotion + Typescript, нужно изменить tsconfig.json
- https://emotion.sh/docs/typescript

tsconfig.json

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@emotion/react",
    },
}
```

App.tsx

```js
import { css } from "@emotion/react"

const buttonStyles = {
  color: "white",
  backgroundColor: "yellowgreen",
};

const App = () => {
    return (
        <>
            <div css={css({ color: "blue" })}>Hello</div>
            <div css={{ color: "blue" }}>Hello</div>
            <Button css={buttonStyles}>Click</Button>
        </>
    )
}

export default App
```
