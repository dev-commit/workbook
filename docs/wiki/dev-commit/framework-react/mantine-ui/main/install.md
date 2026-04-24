# Установка и настройка

## Информация

::: info

- https://mantine.dev/guides/vite/ - Использование с Vite
  :::

## Пакеты

- `@mantine/hooks` - Хуки для управления состоянием и пользовательским интерфейсом.
- `@mantine/core` - Библиотека основных компонентов: поля ввода, кнопки, наложения и т.д.

> Все пакеты можно сформировать здесь https://mantine.dev/guides/vite/#installation

## Установка

> Только базовые пакеты

```bash
npm i @mantine/core @mantine/hooks
```

## Использование

> src/main.tsx

```tsx{4,5,8,10}
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
);
```
