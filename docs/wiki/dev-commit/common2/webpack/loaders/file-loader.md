# file-loader

npm i --save-dev file-loader

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|svg|gif|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							//name:'[name].[ext]'
							//outputPath: './'
						}
					},
				],
				},
		],
	},
};
```

```bash
name: '[path][name].[ext]'
name: '[name].[ext]'
```
