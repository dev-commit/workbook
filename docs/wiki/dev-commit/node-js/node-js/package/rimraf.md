# rimraf

## Установка

```bash
npm i --save rimraf
```

::: warning

- С Node.js 14.14 непустую директорию можно удалить без пакета: `fs.rm(path, { recursive: true })`
- С rimraf v4 функция возвращает Promise (колбэков нет), с v5 нет экспорта по умолчанию: `const { rimraf } = require("rimraf")`

:::

## Подключение

```js
const rimraf = require("rimraf");
```
