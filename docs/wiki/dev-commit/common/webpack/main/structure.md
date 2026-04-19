# Структура проекта

```bash
✖ dist
	• main.js        # итоговый бандл
✖ src
	• index.js       # точка входа
• index.html         # страница
• package.json       # описание зависимостей и информации о проекте
• package-lock.json  # описание зависимостей со строго зафиксированной версией, чтобы окружение у разных разработчиков было одинаковое
• webpack.config.js  # конфигурация
```

## Минимальная сборка от Владилена Минина

::: info
https://github.com/vladilenm/redux-course-2020
:::

```js
{
	"name": "webpack",
	"main": "src/index.js",
	"scripts": {
		"start": "webpack-dev-server --open",
		"build": "webpack --mode production"
	},
	"devDependencies": {
		"css-loader": "^3.4.2",
		"html-webpack-plugin": "^3.2.0",
		"style-loader": "^1.1.3",
		"webpack": "^4.42.0",
		"webpack-cli": "^3.3.11",
		"webpack-dev-server": "^3.10.3"
	}
}
```

```js
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	devServer: {
		port: 3000
	}
}
```
