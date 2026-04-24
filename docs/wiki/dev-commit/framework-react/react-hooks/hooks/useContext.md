# Хук контекста useContext()

::: info

- https://react.dev/reference/react/useContext
  :::

::: danger

**`name`** -

> - `props` - props
> - _return_ - null

:::

    Можно подписаться на контекст React без использования каких-либо вложений

объект контекста (значение, возвращённое из React.createContext)
Возвращает текущее значение контекста для принятого контекста

- Текущее значение контекста определяется пропом value ближайшего &lt;MyContext.Provider> над вызывающим компонентом в дереве

```js
import { useContext } from "react";

const value = useContext(MyContext);
```

## Пример: Смена темы

#### Создание Provider и Hook

- Вариант для JavaScript и TypeScript

#### ThemeProvider.jsx

```js
import { useState, useContext } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const change = (name) => setTheme(name);

  return (
    <ThemeContext.Provider value={{ theme, change }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
```

#### ThemeProvider.tsx

```js
import React, { useState, useContext, useMemo } from 'react';

// const ThemeContext = React.createContext({
//     theme: 'light',
//     change: (_: string) => {},
// });

const ThemeContext =React.createContext<Object>(false);

interface Props {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState('light');

    const change = (value: string) => setTheme(value);

    // Можно обернуть в useMemo
    const preparedProviderValue = useMemo(
        () => ({ theme, change }),
        [theme, change]
    );

    return (
		<ThemeContext.Provider
            value={preparedProviderValue}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
```

#### Корневой компонент

- Просто обернуть в ThemeProvider

```js
import ThemeProvider from "./ThemeProvider";
import { View, Change } from "./Components";

const App = () => (
  <ThemeProvider>
    <View />
    <Change />
  </ThemeProvider>
);

export default App;
```

#### Дочерние компоненты

- Можно использовать хук useTheme для доступа к значению текущей темы и функции изменения темы

```js
import { useTheme } from "./ThemeProvider";

const View = () => {
  const isTheme = useTheme();
  return isTheme.theme;
};

const Change = () => {
  const isTheme = useTheme();
  return (
    <>
      <button onClick={() => isTheme.change("dark")}>Dark</button>
      <button onClick={() => isTheme.change("light")}>Light</button>
    </>
  );
};
```
