# Импорт CSS Modules

## Проблематика

- При **Vite Library Mode** CSS из `*.module.css` находится в отдельнои asset (`dist/ui-kit.css`) и *не загружается автоматически* при импорте в приложении
- В dist/ пакета есть CSS (например dist/ui-kit.css), но он не попадает в сборку приложения.

```ts
import { UiButton } from "@tony/ui-kit";
```

## Варианты решения CSS Modules в npm‑пакете

::: details ⭐️ 1. Явный импорт CSS в приложении

- **Суть**: библиотека публикует CSS (например `dist/ui-kit.css`), а приложение один раз делает импорт
- **Плюсы**: максимально просто и предсказуемо
- **Минусы**: не подходит, если требование — “в приложении импортировать только компоненты”

**Приложение**

> src/main.tsx

```ts
import "@tony/ui-kit/ui-kit.css";
```

**NPM-пакет**

> package.json

```json
{
  "scripts": {
    "prepublishOnly": "npm run build"
  },
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    },
    "./ui-kit.css": "./dist/ui-kit.css"
  },
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

:::

::: details ⭐️ 2. Публикация исходников (без бандла)

**Реализация двумя изменениями:**

1. Пакет не должен экспортировать исходники
2. Приложение не должно выпполнять pre-bund для ui-kit

Эта связка позволяет CSS Modules из `ui-kit/src/**` обрабатываться обычным пайплайном Vite приложения (как будто это ваш `src/`), без ручного импорта CSS

**NPM-пакет**

> package.json

```json
{
  // exports переключили на исходный entrypoint
  // [!code ++]
  "exports": {
    // [!code ++]
    ".": "./src/index.ts"
    // [!code ++]
  },

  // files поменяли, чтобы в npm попадали исходники и документация (а не dist)
  // [!code ++]
  "files": ["src", "doc", "README.md", "package.json"]
}
```

**Приложение**

> vite.config.ts

```tsx
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

::: details 3. CSS‑in‑JS (рантайм‑стили)

- **Суть**: стили генерируются и инжектятся в DOM в рантайме (Emotion/styled-components/vanilla-extract runtime подходы)
- **Пример**: Chakra UI использует Emotion runtime и требует Provider
- **Плюсы**: потребителю не нужен отдельный импорт CSS
- **Минусы**: рантайм‑стоимость, зависимость от стека CSS‑in‑JS, часто нужен Provider

:::

::: details 4. Авто‑подключение CSS при импорте JS (side‑effect import CSS)

- **Суть**: сделать так, чтобы `dist/index.js` (или чанки) содержали `import "./style.css"` как side‑effect
- **Как делают**: плагин/пост‑обработка сборки (Rollup/Vite/tsup и т.п.), которые инжектят CSS‑импорт в output
- **Плюсы**: потребитель импортирует только компоненты, CSS подтягивается автоматически
- **Минусы**: нужен шаг/плагин на сборку
  :::
