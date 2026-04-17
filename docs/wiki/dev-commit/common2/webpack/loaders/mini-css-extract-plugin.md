# mini-css-extract-plugin

npm i --save-dev mini-css-extract-plugin

- **mini-css-extract-plugin** - создает отдельный файл css

## css-loader + mini-css-extract-plugin

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    module.exports = {
	module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        	filename: '[name].css'
        	//filename: 'styles.css'
    	})
    	]
};
```
