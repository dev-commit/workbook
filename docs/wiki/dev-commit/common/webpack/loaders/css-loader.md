# css-loader

npm i --save-dev css-loader

- **css-loader** - загрузка и объединение всех CSS файлов в один (translates CSS into CommonJS)
- Если лоадера нет, то Webpack считает это js файлом, пытается его разобрать и видит ошибку
- Webpack выполняет loaders в обратном порядке: с последнего до первого, то есть справа налево

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
					],
			},
		],
	},
};
```

## CSS модули

```js
{
	test: /\.css$/,
	use: [
		MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				modules: true,
				localIdentName: '[name]__[local]__[hash:base64:5]',
				sourceMap: true
			}
		}
		]
},
```

```bash
localIdentName: '[name]__[local]__[hash:base64:5]'
	[name]           # название компонента
	[local]          # название класса
	[hash:base64:5]  # 5 символов hash
```

```js
import classes from './Component.css';

render() {
	return (<div className={classes.headerItem}></div>);
}
```

```css
.headerItem { background: orange; }
```
# дополнительные плагины
react-css-modules              # возможно его заменил babel-plugin-react-css-modules
babel-plugin-react-css-modules
