# html-webpack-plugin

npm i --save-dev html-webpack-plugin
::: info
https://webpack.js.org/concepts/#plugins
:::
- Указание шаблона файла .html в который подключается основной скрипт .js
- Плагин генерирует HTML файл, затем вставляет в него скрипт и записывает файл на dist/index.html

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
	module.exports = {
	plugins: [
		new HtmlWebpackPlugin({template: './index.html'})
		]
}
```
