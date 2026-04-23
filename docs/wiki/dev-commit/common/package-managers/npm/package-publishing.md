# Публикация пакета

## Команды

```bash
npm init    # Инициализация проекта
npm login   # Вход в аккаунт (при наборе пароля, он не будет показан)
npm whoami  # Проверить текущий логин
npm publish # Публикация проекта
```

## Использование в проекте

**Установка**

```bash
npm i @tony/ui-kit@0.0.1
```

**Код**

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

## Настройки NPM-пакета

### Конфиги

::: code-group

```json [package.json]
{
  "name": "@tony/ui-kit",
  "private": false,
  "version": "0.0.3",
  "type": "module",
  "scripts": {
    // [!code --]
    "dev": "vite",
    // [!code --]
    "build": "tsc -b && vite build",
    // [!code ++]
    "build": "vite build && tsc -p tsconfig.build.json"
  },
  // [!code ++]
  "files": ["src", "doc", "README.md", "package.json"],
  // [!code ++]
  "sideEffects": ["**/*.css"],
  // [!code ++]
  "exports": {
    // [!code ++]
    ".": "./src/index.ts"
    // [!code ++]
  },
  // [!code ++]
  "publishConfig": {
    // [!code ++]
    "access": "public"
    // [!code ++]
  },
  // Было в "dependencies"
  "peerDependencies": {
    "react": ">=19",
    "react-dom": ">=19"
  },
  // Осталось без изменений
  "devDependencies": {
    // [!code --]
    "react": "^19.2.5",
    // [!code --]
    "react-dom": "^19.2.5",
    "@eslint/js": "^9.39.4",
    "@types/node": "^24.12.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.9"
  }
}
```

```ts [vite.config.ts]
export default defineConfig({
  plugins: [react()],
  // [!code --]
  optimizeDeps: {
    // [!code --]
    exclude: ["@tony/ui-kit"],
    // [!code --]
  },
  // [!code ++]
  build: {
    // [!code ++]
    lib: {
      // [!code ++]
      entry: "src/index.ts",
      // [!code ++]
      formats: ["es"],
      // [!code ++]
      fileName: () => "index.js",
      // [!code ++]
    },
    // [!code ++]
    rollupOptions: {
      // [!code ++]
      external: ["react", "react-dom", "react/jsx-runtime"],
      // [!code ++]
    },
  },
});
```

```ts [tsconfig.build.json]
{
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["ES2023", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "declaration": true,
    "emitDeclarationOnly": true,
    "declarationMap": true,
    "rootDir": "src",
    "outDir": "dist",
    "stripInternal": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["src/**/*.test.*", "src/**/*.stories.*"]
}

```

:::

### Директория src

> src/

::: code-group

```ts [ite-env.d.ts]
/// <reference types="vite/client" />
```

```ts [index.ts]
export { UiButton } from "./ui/UiButton/UiButton";
export type { UiButtonProps } from "./ui/UiButton/UiButton";
```

:::

### Директория src/ui/UiButton

> src/ui/UiButton/

::: code-group

```tsx [UiButton.tsx]
import styles from "./styles.module.css";

export interface UiButtonProps {
  title: string;
}

export function UiButton({ title }: UiButtonProps) {
  return <button className={styles.button}>{title}</button>;
}
```

```css [styles.module.css]
.button {
  background: yellowgreen;
}
```

:::
