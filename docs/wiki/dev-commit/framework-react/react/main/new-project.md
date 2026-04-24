# Новый проект

## Разворачивание проекта

::: details Алгоритм

**1. Развернуть проект на Vite**

- _Раздел_: Vite

**2. Настроить Aliases**

- _Раздел_: Vite Aliases

**3. Настроить Eslint и Prettier**

- _Раздел_: Eslint и Prettier

**4. Установить Material-UI**

- _Раздел_: Install Material-UI

**5. Установить библиотеки**

```bash
npm i --save axios
```

---

```bash
npm i --save classnames
```

---

```bash
npm i --save lodash
npm i --save-dev @types/lodash
```

:::

## Структура проекта

::: details Структура

#### Корневой узел

- 📂 public
- 📂 docs
- 📂 src

#### Директория src

_Structure_

- 📂 components
- 📂 containers
- 📂 layouts
- 📂 pages

_Utils_

- 📂 utils
- 📂 config
- 📂 hooks
- 📂 hoc

_Common_

- 📂 ui-kit
- 📂 constants
- 📂 context
- 📂 services / api
- 📂 store
- 📂 styles
- 📂 types
- 📂 routes

_Other_

- 📂 i18n
- 📂 helpers

_Files_

- › index.tsx

:::

### Директория "Services"

- _Раздел_: Axios

### Директория "Types"

📂 types
› index.d.ts

> index.d.ts

```ts
declare global {
  interface Window {
    store: RootState;
  }
}
```
