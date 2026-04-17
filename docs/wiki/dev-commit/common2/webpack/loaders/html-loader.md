# html-loader

npm i --save-dev html-loader

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [ {
					loader: 'html-loader'
				}],
			}
		]
	},
}
```

```js
import page from './page.html';
```
