# nodemon

npm i --save-dev nodemon

- Позволяет увидеть изменения без перезапуска сервера, созданного через http.createServer()

```js
{
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
    },
    "devDependencies": {
        "nodemon": "^2.0.19"
    }
}
```
