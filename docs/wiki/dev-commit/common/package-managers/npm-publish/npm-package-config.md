# NPM-пакет: конфигурация для CSS Modules

## Проблематика

- При **Vite Library Mode** CSS из `*.module.css` находится в отдельнои asset (`dist/ui-kit.css`) и *не загружается автоматически* при импорте в приложении
- В dist/ пакета есть CSS (например dist/ui-kit.css), но он не попадает в сборку приложения.

```ts
import { UiButton } from "@tony/ui-kit";
```

## Решение

**Общая логика в NPM-пакете**

::: code-group

```json [package.json]
{
  "name": "@tony/ui-kit",
  "private": false,
  "version": "0.0.1",
  "type": "module",

  // Будет отличаться от способа реализации
  // [!code warning]
  "files": [],
  // [!code warning]
  "exports": {},

  "scripts": {
    "dev": "vite",
    // [!code --]
    "build": "tsc -b && vite build",
    // [!code ++]
    "build": "rm -rf dist && vite build && tsc -p tsconfig.build.json",
    // lifecycle-скрипт npm, вызывается перед "npm publish"
    // [!code ++]
    "prepublishOnly": "npm run build"
  },

  // [!code ++]
  "sideEffects": ["**/*.css"],
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
    // [!code warning]
    "react": "^19.2.5",
    // [!code warning]
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
    // [!code ++]
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

## Варианты

<v-details title="⭐️ 1. Явный импорт CSS в приложении">

### Информация

- _Суть_: библиотека публикует CSS (например `dist/ui-kit.css`), а приложение один раз делает импорт
- _Плюсы_: максимально просто и предсказуемо
- _Минусы_: не подходит, если требование - “в приложении импортировать только компоненты”

### Где это реализовано

- https://mantine.dev/ - Mantine (styling-система CSS Modules + CSS variables)

### Код

**NPM-пакет**

_vite.config.ts_

- Без переопределения `assetFileNames` после build будет файл "ui-kit.css"
- "ui-kit.css" - это дефолт Vite в режиме library build. Когда включён build.lib, Vite, если не переопределять имя ассета через rollupOptions.output.assetFileNames, генерирует CSS-файл с именем, производным от имени библиотеки (обычно берётся из package.json.name, “нормализуется” и получается что-то вроде ui-kit.css)
- Поэтому формируется имя итогового CSS файла "styles.css"

::: code-group

```json [package.json]
{
  // Указали "dist"
  // [!code ++]
  "files": ["dist", "README.md", "package.json"],

  // Указали "dist"
  "exports": {
    // [!code ++]
    ".": {
      // [!code ++]
      "types": "./dist/index.d.ts",
      // [!code ++]
      "import": "./dist/index.js",
      // [!code ++]
      "default": "./dist/index.js"
      // [!code ++]
    },
    // [!code ++]
    "./styles.css": "./dist/styles.css"
  }
}
```

```ts [vite.config.ts]
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "index.js",
    },
    // Нужно, чтобы все стили библиотеки собирались в один общий файл
    // [!code ++]
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      // Добавили обработку output
      // [!code ++]
      output: {
        // [!code ++]
        assetFileNames: (assetInfo) => {
          // [!code ++]
          if (assetInfo.name && assetInfo.name.endsWith(".css"))
            // [!code ++]
            return "styles.css";
          // [!code ++]
          return "assets/[name]-[hash][extname]";
          // [!code ++]
        },
        // [!code ++]
      },
    },
  },
});
```

:::

**Приложение**

::: code-group

```ts [src/main.tsx]
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Подключение стилей из Ui-Kit
// [!code ++]
import "@tony/ui-kit/styles.css";

createRoot(document.getElementById("root")!).render(<App />);
```

:::

</v-details>

<v-details title="⭐️ 2. Публикация исходников (без бандла)">

### Алгоритм

1. Пакет не должен экспортировать исходники
2. Приложение не должно выпполнять pre-bund для ui-kit

> Эта связка позволяет CSS Modules из `ui-kit/src/**` обрабатываться обычным пайплайном Vite приложения (как будто это ваш `src/`), без ручного импорта CSS

### Код

**NPM-пакет**

::: code-group

```json [package.json]
{
  // Указали "src" вместо "dist", чтобы в npm попадали исходники и документация
  // [!code ++]
  "files": ["src", "README.md", "package.json"],

  // Переключили на "src" вместо "dist"
  "exports": {
    // [!code ++]
    ".": "./src/index.ts"
  }
}
```

:::

**Приложение**

::: code-group

```tsx [vite.config.ts]
export default defineConfig({
  plugins: [react()],
  // Добавили исключение из dependency pre-bundling
  // [!code ++]
  optimizeDeps: {
    // [!code ++]
    exclude: ["@tony/ui-kit"],
    // [!code ++]
  },
});
```

:::

</v-details>

<v-details title="3. Переписать на CSS‑in‑JS (рантайм‑стили)">

### Информация

- _Суть_: стили генерируются и инжектятся в DOM в рантайме (Emotion/styled-components/vanilla-extract runtime подходы)
- _Плюсы_: потребителю не нужен отдельный импорт CSS
- _Минусы_: рантайм‑стоимость, зависимость от стека CSS‑in‑JS, часто нужен Provider

### Где это реализовано

- https://chakra-ui.com/ - Chakra UI (styling-система CSS-in-JS `@emotion`)

</v-details>

<v-details title="4. Авто‑подключение CSS при импорте JS (side‑effect import CSS)">

### Информация

- _Суть_: сделать так, чтобы `dist/index.js` (или чанки) содержали `import "./style.css"` как side‑effect
- _Как делают_: плагин/пост‑обработка сборки (Rollup/Vite/tsup и т.п.), которые инжектят CSS‑импорт в output
- _Плюсы_: потребитель импортирует только компоненты, CSS подтягивается автоматически
- _Минусы_: нужен шаг/плагин на сборку

</v-details>
