# ENV-переменные

## Информация

::: info

- https://nextjs.org/docs/app/api-reference/next-config-js/env

:::

## Конфиг next.config.js

::: code-group

```js [next.config.js]
// Объявление
module.exports = {
  env: {
    API_URL: "https://jsonplaceholder.typicode.com/",
  },
};
```

```js [App.jsx]
// Использование
const App = async () => {
  const response = await fetch(process.env.API_URL + "todos/1");
};
```

:::

::: warning

- Ключ `env` в next.config.js - устаревшее API (оставлено для обратной совместимости). Переменные из него всегда попадают в JS-бандл браузера

:::

## Библиотека dotenv

```bash
npm i --save dotenv
```

::: info

- https://github.com/motdotla/dotenv

:::

- Библиотека позволяет работать с _env-переменными_ через _.env-файл_

::: code-group

```js [next.config.js]
require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
};
```

```bash [.env]
API_URL=https://jsonplaceholder.typicode.com/
```

:::

::: warning

- С версии 9.4 Next.js сам загружает переменные из `.env`-файлов, без dotenv. На сервере доступны все переменные, в браузере - только с префиксом `NEXT_PUBLIC_`

:::
