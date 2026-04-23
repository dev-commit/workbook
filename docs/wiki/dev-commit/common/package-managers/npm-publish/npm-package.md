# Настройки NPM-пакета

## Конфиги

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
    // Оставить "react" и "react-dom" если есть Dev-сборка/Тесты/StoryBook
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
// Новый конфиг, который вызывается при "build"
{
  "compilerOptions": {
    // Целевая версия JS
    "target": "ES2023",
    // Набор встроенных lib-типов
    "lib": ["ES2023", "DOM"],
    // Тип модулей для анализа импорта/экспорта при генерации деклараций
    "module": "ESNext",
    // Резолвинг модулей в стиле бандлера
    "moduleResolution": "Bundler",
    // Подмешивает типы Vite (например, для импорта *.module.css и import.meta.env)
    "types": ["vite/client"],
    // JSX-трансформ React 17+ (автоматический runtime), чтобы TS корректно типизировал TSX
    "jsx": "react-jsx",
    // Включает генерацию .d.ts для публикации типов пакета
    "declaration": true,
    // Генерирует только .d.ts (JS собирает Vite), чтобы не получать второй “JS билд” от tsc
    "emitDeclarationOnly": true,
    // Генерирует .d.ts.map для удобства навигации по типам в IDE
    "declarationMap": true,
    // Корневая папка исходников — фиксирует структуру путей в выходных .d.ts
    "rootDir": "src",
    // Куда складывать выходные .d.ts
    "outDir": "dist",
    // Удаляет из .d.ts символы, помеченные /** @internal */
    "stripInternal": true,
    // Ускоряет сборку: не проверяет типы зависимостей в node_modules
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["src/**/*.test.*", "src/**/*.stories.*"]
}
```

:::

## Директория src

> src/

::: code-group

```ts [index.ts]
export { UiButton } from "./ui/UiButton/UiButton";
export type { UiButtonProps } from "./ui/UiButton/UiButton";
```

:::

## Директория src/ui/UiButton

- Реализован обычный компонент

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
