# Config: SourceMap

- Позволяет показыать исходные файлы при отладке через браузер, а не скомпилированный код
- В сборке дополнительно создается файл main.js.map, если файл сборки назывался main.js

::: info
https://webpack.js.org/guides/development/#using-source-maps
:::

```js
module.exports = {
    devtool: 'source-map',                    // для production. дополнительно создается файл "main.js.map"
    devtool: 'cheap-inline-module-source-map' // файл "main.js.map" не создается, данные для отладки в файле "main.js"
```
