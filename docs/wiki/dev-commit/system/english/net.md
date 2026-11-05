# Net

## Компоненты

**Общее**

- Chip
- Tabs
- Alert
- Notification
- Modal
- Accordion
- Badge
- Timeline
- Blockquote
- Table

**Форма**

- Checkbox
- Input
- Radio
- Switch
- Textarea
- Select

---

## 1. Подключение библиотеки UI-компонентов Mantine UI

### Установка зависимостей

```bash
npm install @mantine/core @mantine/hooks
```

### Настройка и подключение компонентов

**Корень приложения**

> src/main.tsx

- Добавление MantineProvider и Styles

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// [!code ++]
import { MantineProvider } from "@mantine/core";

// [!code ++]
import "@mantine/core/styles.css";
import "./index.css";

import App from "./App.tsx";
import { ThemeProvider } from "./ui-kit";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    // [!code ++]
    <MantineProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      // [!code ++]
    </MantineProvider>
  </StrictMode>,
);
```

> src/App.tsx

```tsx
// [!code ++]
import { Button } from "@mantine/core";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  // [!code ++]
  const handleClick = () => {
    // [!code ++]
    console.log("Click");
    // [!code ++]
  };

  return (
    <div className="app">
      <ThemeToggle />
      // [!code ++]
      <Button onClick={handleClick}>Кнопка Mantine</Button>
    </div>
  );
};

export default App;
```

---

## 2. Использование иконок

## Информация

> Mantine в своих демо использует Phosphor как рекомендуемый набор, потому что `ActionIcon`, `Button` и другие слоты принимают любой React-узел. Внутрь можно положить Phosphor, Tabler, Lucide, свою SVG — библиотека к иконкам не привязана.

## Подключение

**Настройка**

1. Описание из документации https://mantine.dev/guides/icons/
2. Ссылка на проект “Phosphor Icons” https://phosphoricons.com/ → Get started
3. Переход на GitHub “Phosphor Icons” https://github.com/phosphor-icons/homepage#phosphor-icons
4. Раздел GitHub “Phosphor Icons” для React https://github.com/phosphor-icons/react

**Установка библиотеки**

```bash
npm i @phosphor-icons/react
```

**Использование**

- https://mantine.dev/core/button/#left-and-right-sections - Buttons

**Корень приложения**

- `src/App.tsx`

```tsx
import { Button } from "@mantine/core";
// [!code ++]
import { AirplaneIcon } from "@phosphor-icons/react";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="app">
      <ThemeToggle />
      <hr />
      // [!code ++]
      <AirplaneIcon size={40} color="#4a13ae" weight="duotone" />
      // [!code ++]
      <Button
        // [!code ++]
        leftSection={
          // [!code ++]
          <AirplaneIcon color="#4a13ae" weight="duotone" size={14} />
          // [!code ++]
        }
        // [!code ++]
        variant="default"
        // [!code ++]
      >
        Кнопка с иконкой
      </Button>
    </div>
  );
};

export default App;
```

---

## 3. Смена темы для компонентов Mantine UI через MantineProvider

### Ссылки

- https://mantine.dev/theming/color-schemes/#force-color-scheme
- https://mantine.dev/theming/color-schemes/

### Смена темы

**MantineProvider**

> src/main.tsx

- Нельзя напрямую вызывать хук useTheme - он доступен только внутри компонента, обернутого в ThemeProvider

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// [!code --]
import { MantineProvider } from "@mantine/core";
// [!code ++]
import MantineWithUiTheme from "./components/MantineWithUiTheme";

import "@mantine/core/styles.css";
import "./index.css";

import App from "./App.tsx";
import { ThemeProvider } from "./ui-kit";
import MantineWithUiTheme from "./components/MantineWithUiTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    // [!code --]
    <MantineProvider>
      <ThemeProvider>
        // [!code ++]
        <MantineWithUiTheme>
          <App />
          // [!code ++]
        </MantineWithUiTheme>
      </ThemeProvider>
      // [!code --]
    </MantineProvider>
  </StrictMode>,
);
```

- `src/components/MantineWithUiTheme.tsx`

```tsx
import { MantineProvider } from "@mantine/core";

import { useTheme } from "../ui-kit";

const MantineWithUiTheme = (props: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <MantineProvider defaultColorScheme="light" forceColorScheme={theme}>
      {props.children}
    </MantineProvider>
  );
};

export default MantineWithUiTheme;
```

**Иконки**

- `src/App.tsx`

- currentColor - иконка берёт цвет текста родителя, он меняется вместе с темой

```tsx
import { Button } from "@mantine/core";
import { AirplaneIcon } from "@phosphor-icons/react";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="app">
      <ThemeToggle />
      <hr />
      // [!code ++]
      <AirplaneIcon size={40} color="currentColor" weight="duotone" />
      <Button
        leftSection={
          // [!code ++]
          <AirplaneIcon color="currentColor" weight="duotone" size={14} />
        }
        variant="default"
      >
        Кнопка с иконкой
      </Button>
    </div>
  );
};

export default App;
```

---

## 4. Стилизация компонентов из Mantine UI

### Ссылки

- https://mantine.dev/styles/css-modules/ - Styling. CSS modules
- https://mantine.dev/core/badge/ - Компонт Badge

### Код

**Корень приложения**

- `src/App.tsx`

```tsx
import UiBadge from "./ui-kit/UiBadge";

const App = () => {
  return <UiBadge>Badge</UiBadge>;
};
```

**UiBadge**

> src/ui-kit/UiBadge/

> `UiBadge.tsx`

```tsx
import { Badge } from "@mantine/core";
import styles from "./styles.module.css";

interface IProps {
  color?: string;
  children: React.ReactNode;
}

const UiBadge = (props: IProps) => {
  const { color, children } = props;

  return (
    <Badge color={color} className={styles.wrapper}>
      {children}
    </Badge>
  );
};

export default UiBadge;
```

> `styles.module.css`

```css
.wrapper {
  border: 1px solid #4343db;
}
```

> `index.ts`

```tsx
export { default } from "./UiBadge";
```
