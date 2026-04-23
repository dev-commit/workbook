# Vite

## Код

### Vite Config

> vite.config.ts

```js{8-12}
import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- Если в проекте есть TypeScript, то попросит установить @types/node для path

```bash
npm i --save-dev @types/node
```

### TS Config

- Если есть файл tsconfig.app.json, то настройки нужно указать в нем

> tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/src/*": ["src/*"],
      "@/components/*": ["src/components/*"]
    }
  }
}
```
