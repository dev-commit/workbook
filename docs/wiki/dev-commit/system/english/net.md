# Net

### Рефакторинг App

- `UiModal` из src/App.tsx вынести в `components`
- Добавить кнопку
- App по итогу должен остаться пустым

### 1. Theme Provider

> `src/ui-kit/theme/ThemeProvider.tsx`

- `createContext()`
- `<ThemeContext.Provider>`
- `useContext()`

```tsx
import {
  createContext, useContext, useState
} from "react";

export type UiTheme = "light" | "dark";

interface IThemeContext {
  theme: UiTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | null>
  (null);

export const ThemeProvider = (
  props: { children: React.ReactNode }
) => {
  const { children } = props;

  const [theme, setTheme] = useState<UiTheme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (
      prevTheme === "light" ? "dark" : "light")
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Хук-обёртка, чтобы не писать useContext(ThemeContext)
// в каждом компоненте
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);

  // Проверка убирает null из типа — после неё доступны
  // theme и toggleTheme
  if (!context) {
    throw new Error(
      "useTheme нужно использовать внутри <ThemeProvider>"
    );
  }

  return context;
};
```

> `src/main.tsx`

```tsx
import { ThemeProvider } from "./ui-kit";
...

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Провайдер темы приходит из ui-kit,
    как ThemeProvider в MUI */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
```

### 2. Theme Toggle

> `src/components/ThemeToggle.tsx`

```tsx
import { UiButton, useTheme } from "../ui-kit";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return
    <UiButton onClick={toggleTheme}>
      Тема: {theme}
    </UiButton>;
};

export default ThemeToggle;
```

> `src/App.tsx`

```tsx
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return <ThemeToggle />;
};

export default App;
```

### 3. CSS токены темы

> `src/ui-kit/theme/ThemeProvider.tsx`

- Обёртка с data-ui-theme — от неё наследуются переменные всем вложенным компонентам

```tsx
export const ThemeProvider = (
  props: { children: React.ReactNode }
) => {
  ...
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      <div data-ui-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
```

> `src/App.tsx`

```tsx
const App = () => {
  return (
    <div className="app">
      <ThemeToggle />
    </div>
  );
};
```

> `src/index.css`

**Ui-Kit**

- Дизайн-токены ui-kit — только то, что нужно всем компонентам сразу
- Префикс --ui- защищает от коллизий, когда библиотеку подключат как npm-пакет

```css
/* Светлая тема — значения по умолчанию,
работают даже без провайдера */
:root {
  --ui-color-bg: #fff;
  --ui-color-text: #000;
}

/* Тёмная тема — только переопределения */
[data-ui-theme="dark"] {
  --ui-color-bg: #000;
  --ui-color-text: #fff;
}
```

**Приложение**

```css
/* Приложение использует те же токены,
что и компоненты ui-kit */
.app {
  padding: 20px;
  background: var(--ui-color-bg);
  color: var(--ui-color-text);
}

html,
body {
  margin: 0;
  padding: 0;
}
```

> `src/main.tsx`

```tsx
import "./index.css";
```

### 4. Рефакторинг CSS токенов

> `src/ui-kit/theme/tokens.css`

- Вынести переменные для Ui-Kit из `src/index.css`

> `src/ui-kit/theme/ThemeProvider.tsx`

```tsx
// Токены приезжают вместе с провайдером — как в реальных ui-библиотеках
import "./tokens.css";
```

### 5. Добавление темы в Ui-Kit и StoryBook

> `src/ui-kit/UiButton/styles.module.css`

```css
.wrapper {
  /* Основной цвет */
  --color-primary: #424242;
  /* Цвет того, что лежит на поверхности */
  --color-on-primary: #ffffff;
  --color-link: #2f2fc0;

  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: none;
}

/* Те же переменные, но для тёмной темы:
селектор смотрит на атрибут от ThemeProvider */
[data-ui-theme="dark"] .wrapper {
  --color-primary: #eeeeee;
  --color-on-primary: #222222;
  --color-link: #9fd1ff;
}

...
```

> `.storybook/preview.tsx`

```tsx
import type { Preview } from "@storybook/react-vite";

import { ThemeProvider } from "../src/ui-kit";

const preview: Preview = {
  // Провайдер нужен всем историям:
  // он подключает токены темы
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
```

### 6. Добавление index-файла в Ui-Kit

> `src/ui-kit/index.ts`

```tsx
// Точка входа библиотеки — то, что будет публичным API npm-пакета
export { default as UiButton } from "./UiButton";
export { default as UiInput } from "./UiInput";
export { default as UiModal } from "./UiModal";

export { ThemeProvider, useTheme } from "./theme/ThemeProvider";
export type { UiTheme } from "./theme/ThemeProvider";
```
