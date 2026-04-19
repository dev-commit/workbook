# cssnano

npm i --save-dev cssnano

## Подключение через postcss.config.js

```js
module.exports = {
    plugins: [
        require('cssnano')({
            present: [
                'default', {
                    discardComments: {
                        removeAll: true
                    }
                }
            ]
        })
        ]
}
```
