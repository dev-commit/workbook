# Использование в проекте

## Установка

```bash
npm i @tony/ui-kit@0.0.1
```

## Код

::: code-group

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

```ts{4-6} [vite.config.ts]
export default defineConfig({
  plugins: [react()],
  // Новая секция (для работы CSS-модулей)
  optimizeDeps: {
    exclude: ["@tony/ui-kit"],
  },
});
```

:::
