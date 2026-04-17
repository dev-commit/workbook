# babel

npm i --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties

- **babel** - transpiler. может транспилировать ES6 в ES5 и JSX в ES5
- babel-loader - используется для загрузки JavaScript/JSX файлов. Помощник Webpack для транспайлинга кода, задает пресеты
- @babel/core - преобразует код ES6 в ES5
- @babel/preset-env - пресет для транспайлинга кода ES6/ES7/ES8 в ES5
- @babel/preset-react - пресет для транспайлинга кода JSX в ES5
- @babel/plugin-proposal-class-properties - пресет для использования в react эспериментального синтаксиса общедоступных полей классов для задания обработчиков событий

::: info

:::

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.m?js|jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env',  '@babel/preset-react'],
					    plugins: [
							 '@babel/plugin-proposal-class-properties'
						]
					}
				}
				}
		]
	}
}
```

## Файл .babelrc

- Сообщит babel, какие из пресетов использовать для транспайлинга
- Или это можно прописать в опции presets

```js
{
	"presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
