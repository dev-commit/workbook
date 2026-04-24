# Хук use()

## Ирнформация

::: info

- https://react.dev/reference/react/use
  :::

::: danger

**`use(resource)`** - позволяет читать значение ресурса, например Promise или context

> - `resource` - источник данных, из которых вы хотите прочитать значение. Ресурсом может быть Promise или context

:::

- В отличие от всех других React Hooks, хук можно вызывать внутри циклов и условных операторов, таких как if
- Как и другие хуки React, вызывающая функция use должна быть компонентом или хуком

## Примеры

### Чтение Context

```js
import { use } from "react";

const App = () => {
  const theme = use(ThemeContext);
  //
};
```

```js
const Main = () => {
  <ThemeContext.Provider value="dark">
    <App />
  </ThemeContext.Provider>;
};
```

### Вызов внутри if

- В отличие от `useContext`, `use` может вызываться в условных выражениях и циклах, например if

```js
import { use } from "react";

const App = () => {
  if (true) {
    const theme = use(ThemeContext);
    return <hr className={theme} />;
  }
  //
};
```
