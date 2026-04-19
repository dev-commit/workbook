# autoprefixer

npm i --save-dev autoprefixer

## Подключение через webpack.config.js

```js
const autoprefixer = require('autoprefixer');
    module: {
    rules: [
        {
            test: /\.scss/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ie >= 8', 'last 4 version']
                            })
                        ],
                        sourceMap: true
                    }
                },
                'sass-loader'
            ]
        },
    ]
}
```

## Подключение через postcss.config.js

```js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
```

```js
{
    "browserslist": [
        "> 1%",
        "last 3 version"
    ]
}
```
