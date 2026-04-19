# Config: EntryPoint & OutputPoint

### Одна точка входа и выходная директория

```js
// для построения пути
const path = require('path');
module.exports = {
    // точка входа: по умолчанию './src/index.js'
    entry: './src/index.js',
    // выходная директория: по умолчанию './dist/main.js'
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // path: path.join(__dirname, '/dist'),
        publicPath: '/'
    }
}
```

### Несколько точек входа и выходных файлов

```js
const path = require('path');
module.exports = {
    entry: {
        main: './js/main.js',
        about: './js/about.js'
    }, 
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'out')
    }
}
```
