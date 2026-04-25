# Использование в проекте

## Установка

```bash
npm i @tony/ui-kit@0.0.1 # Конкретная версия
npm i @tony/ui-kit@latest # Последняя версия
```

## Код

::: code-group

```ts{5} [src/main.tsx]
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Если в Ui-Kit используются CSS-модули
import "@tony/ui-kit/styles.css";

createRoot(document.getElementById("root")!).render(<App />);
```

```tsx{1} [src/App.tsx]
import { UiButton } from "@tony/ui-kit";

const App = () => {
  return <UiButton title="Hello" />;
};
```

```json{3} [package.json]
{
  "dependencies": {
    "@tony/ui-kit": "^0.0.1"
  }
}
```

:::
