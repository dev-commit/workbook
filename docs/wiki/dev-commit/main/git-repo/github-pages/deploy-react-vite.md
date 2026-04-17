# Деплой React + Vite (Vite Template)

### React приложение на vite-template-redux

- https://github.com/reduxjs/redux-templates/tree/master/packages/vite-template-redux
- Для шаблона "vite-template-redux" нужно задать base в vite.config.ts
- При этом не нужно указывать homepage в package.json

## Файлы

```js
import { defineConfig } from "vitest/config"

export default defineConfig({
  base: "/repo-name/",
})
```

```js
{
  "type": "module",
  "scripts": {
    "build": "tsc && vite build",
    "gh-pages": "gh-pages -d dist",
    "deploy": "npm run build && npm run gh-pages"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}
```
