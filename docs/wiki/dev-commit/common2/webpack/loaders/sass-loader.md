# sass-loader

npm i --save-dev sass-loader
npm i --save-dev node-sass

- **sass-loader** - compiles Sass to CSS, using Node Sass by default

```js
module: {
    rules: [
        {
            test: /\.scss/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                },
                ]
        },
    ]
}
```

```js
import './style.scss';
```
