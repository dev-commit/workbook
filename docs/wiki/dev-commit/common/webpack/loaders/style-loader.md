# style-loader

npm i --save-dev style-loader

- **style-loader** - компилирует css в js файл (creates style nodes from JS strings)

## css-loader + style-loader

```js
import './style.css';
```

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				],
			},
		],
	},
};
```
