# Структура

### 1. Подключение и вызов Express

```js
const express = require('express');
const app = express();
```

### 2. Марштуризация

```js
app.get('/url', (req, res) => {
    // Отображаение текста
    res.send('This is Text');
    // Отображаение HTML
    res.send('<h1>This is HTML</h1>');
    // Отображаение HTML файла
    res.sendFile(__dirname + '/index.html');
});
```

### 3. Прослушивание порта

```js
const PORT = process.env.PORT || 3000;
app.listen(PORT, '127.0.0.1');
```

## Общее

```js
const app = express();
// app.use(express.json());

// req - Readable, res - Writable
app.post("path", parser,  (req, res) => {
	// может получить req.body, только если указали app.use(express.json())
	// иначе будет undefined, т.к. это stream
  console.log(req.body);
});

// Можно добавить свой Middleware
// parser - Middleware
app.post("path", parser,  (req, res) => {
	// можем получить req.body, только если указали app.use(express.json())
	// иначе будет undefined, т.к. это stream
  console.log(req.body);
});
```
