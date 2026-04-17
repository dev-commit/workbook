# postcss-loader

npm i --save-dev postcss-loader
::: info
https://github.com/postcss/postcss/blob/master/docs/plugins.md
:::

## Подключение через webpack.config.js

```js
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
                            //
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
                        config: { path: './postcss.config.js' },
                        sourceMap: true
                    }
                },
                'sass-loader'
            ]
        },
    ]
}
```

```js
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'),
        require('cssnano')
    ]
}
```
