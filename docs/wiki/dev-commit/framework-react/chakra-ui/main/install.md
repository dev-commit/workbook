# Установка и настройка

## Информация

::: info

- https://chakra-ui.com/docs/get-started/frameworks/vite - Установка на Vite
  :::

## Установка

**Основные зависимости**

```bash
npm i @chakra-ui/react @emotion/react
```

**Сниппеты (не обязательно)**

- После уставки появляется директория с Provider и сниппетами

```bash
npx @chakra-ui/cli snippet add
```

## Использование

### Без Сниппетов

> src/main.tsx

```tsx{4,7,9}
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={defaultSystem}>
    <App />
  </ChakraProvider>,
);
```
