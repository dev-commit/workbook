# path

::: info
https://nodejs.org/api/path.html
:::

```js
const path = require('path');
```

## Основные методы

```js
const file = 'C:/Users/user/Desktop/nodejs/index.js'

// Название файла
const a = path.basename(file); // => "index.js"

// Путь к директории
const a = path.dirname(file);  // => "C:/Users/user/Desktop/nodejs"

// Расширение файла
const a = path.extname(file);  // => ".js"

// Объект с параметрами текущего файла
const a = path.parse(file);    // =>
// {
//     root: 'C:/',
//     dir: 'C:/Users/user/Desktop/nodejs',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
// }
```

```js
// Объединение строк в путь: src\server\index.js
const a = path.join('src', 'server', 'index.js');
```
