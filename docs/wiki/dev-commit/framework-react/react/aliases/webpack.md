# Webpack

## Настройка

> ./webpack

::: code-group

```js [alias.js]
const path = require("path");
const { SRC_PATH } = require("./constants");

module.exports = {
  "ui-components": path.join(SRC_PATH, "components"),
};
```

```js [constants.js]
const path = require("path");

const ROOT_PATH = path.join(__dirname, "..");

exports.ROOT_PATH = ROOT_PATH;
exports.SRC_PATH = path.join(ROOT_PATH, "./src");
```

```js [base.config.js]
const alias = require("./alias.js");

module.exports = {
  resolve: {
    alias,
    // extensions: ['.js', '.jsx'],
  },
};
```

:::

## Использование

```js
// пусть с алиасом
"components/notification/notification.jsx";
// полный путь
"./src/components/notification/notification.jsx";
```
