# use()

- Express Middleware

```js
const express = require('express');
const app = express();
```

```js
app.use((req, res, next) => {
    res.status(201).end('Hello');
})
```

### Доступ к req.body

```js
const app = express();
// app.use(express.json());

// req - Readable, res - Writable
app.post("path", parser,  (req, res) => {
    // может получить req.body, только если указали app.use(express.json())
    // иначе будет undefined, т.к. это stream
    console.log(req.body);
});
```
