# Стилизация

## Пример

<v-sandbox url="https://codesandbox.io/s/material-ui-custom-styling-9v353z" codesandbox title="Material-Ui Custom Styling" />

## Варианты

- `className`
- `classes`
- `sx`

## Использование `className`

- Material UI завязан на CSS-in-JS библиотеке _Emotion_
- При использовании CSS-in-JS, стили будут ниже и смогут переопределить стандартные стили: [css-injection-order](https://mui.com/material-ui/guides/interoperability/#css-injection-order), [stylesprovider](https://mui.com/system/styles/api/#stylesprovider)

::: info

- Если использовать Material UI с обычными CSS-modules, то стили, прокинутые в компоненты Material UI не будут применяться, т.к. они будут располагаться выше, чем стандартные стили Material UI
- Для фикса, нужно обернуть приложение в `<StyledEngineProvider>` с props `injectFirst`
- https://mui.com/material-ui/guides/interoperability/#css-injection-order

:::

::: warning

- Проблема возникает только при добавлении опции "jsxImportSource" в tsconfig.json
- Если опция не добалена, то нет необходимости использовать `<StyledEngineProvider>`
- (Не проверено)

```json
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react"
  }
}
```

:::

**Пример**

::: code-group

```js [./src/main.jsx]
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
);
```

```js [./App.jsx]
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

const App = (props) => {
  const { children, className = "" } = props;

  return <Button className={styles.button}>Click</Button>;
};

export default App;
```

```js [./styles.module.css]
.button {
  color: white;
  background-color: yellowgreen;
}
```

:::

## Использование Emotion + Typescript

- Для использования Emotion + Typescript, нужно изменить _tsconfig.json_
- https://emotion.sh/docs/typescript

::: code-group

```json [tsconfig.json]
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react"
  }
}
```

```js [App.tsx]
import { css } from "@emotion/react";

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
  );
};

export default App;
```

:::
