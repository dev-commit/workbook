# Webpack

## Настройка

./webpack/alias.js

```js
const path = require('path');
const { SRC_PATH } = require('./constants');

module.exports = {
    'crm-components': path.join(SRC_PATH, 'components'),
};
```./webpack/constants.js

```js
const path = require('path');

const ROOT_PATH = path.join(__dirname, '..');

exports.ROOT_PATH = ROOT_PATH;
exports.SRC_PATH = path.join(ROOT_PATH, './src');
```./webpack/base.config.js

```js
const alias = require('./alias.js');

module.exports = {
    resolve: {
        alias,
        // extensions: ['.js', '.jsx'],
    },
};
```

## Использование

```js
// пусть с алиасом
'components/notification/notification.jsx'
// полный путь
'./src/components/notification/notification.jsx'
```
