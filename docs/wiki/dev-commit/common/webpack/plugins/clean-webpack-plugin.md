# clean-webpack-plugin

npm i --save-dev clean-webpack-plugin

```js
const CleanWebpackPlugin = require('clean-webpack-plugin');
	module.exports = {
    plugins: [
		new CleanWebpackPlugin()
		]
};
```

Если webpack запущен в режиме watch, то при пересохранении удаляет все изображения из dist. Изображения создаются только при запуске webpack
