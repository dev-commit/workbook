# image-webpack-loader

npm i --save-dev image-webpack-loader # оптимизация изображений
::: info
https://github.com/tcoopman/image-webpack-loader
:::

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|svg|gif)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ],
                }
        ]
    }
}
```

Оптимизированные изображения в build подгружаются на страницу, но не открываются в просмотре изображений Windows. Если не указывать "options", то изображения открываются в просмотре изображений Windows
