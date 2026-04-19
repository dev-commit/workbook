# webpack-dev-server

npm i --save-dev webpack-dev-server
::: info
https://webpack.js.org/guides/development/#using-webpack-dev-server
:::

```js
module.exports = {
	devServer: {
		contentBase: './dist',
		historyApiFallback: {
			disableDotRule: true
		},
		stats: 'errors-only',
		port: 3000
	}
	}
```
