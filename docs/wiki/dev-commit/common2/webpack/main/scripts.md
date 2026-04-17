# Скрипты

## package.json

```bash
npm run start
npm run build
```

- В Webpack 4 есть два режима: режим production, который создает оптимизированные файлы, готовые к использованию в режиме production и режим development, который создает легко читаемый код. Флаг --mode позволяет выбрать, какой режим использовать
- Флаги --open и --hot ответственны за обновление веб-страницы всякий раз, когда происходят какие-либо изменения в компонентах

### Основное

```bash
{
	"scripts": {
		"start": "webpack-dev-server", # server
		"build": "webpack" # watcher
	}
}
```

### Дополнительно

```bash
{
	"scripts": {
		"watch":  "webpack -w",                         # watcher
		"watch":  "webpack --watch",                    # watcher
		"dev":    "webpack -d",                         # development
		"prod":   "webpack -p",                         # production
		"dev":    "webpack --mode development --watch", # development
		"prod":   "webpack --mode production"           # production
		"start":  "webpack-dev-server --mode development --open --hot"
	}
}
```

## webpack.config.js

```js
module.exports = {
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			...
		]
	},
	devServer: {
		...
	},
	plugins: [
		...
	]
}
```
