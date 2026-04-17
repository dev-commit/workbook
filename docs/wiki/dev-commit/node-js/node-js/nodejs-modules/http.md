# http

- **http** - создание сервера
- req - request (запрос)
- res - response (ответ)

```js
const http = require('http');
```
- Сервер по адресу http://127.0.0.1:3000/

- text/plain - вывод обычного текста
- text/html - вывод html

```js
const server = http.createServer((req, res) => {
    console.log('url', req.url);

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Привет мир');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, '127.0.0.1');
console.log('Looking for port 3000');
```

## Примеры

### Маршрутизация

- Проверка url и вывод страницы 404, если страница не найдена
- 

```js
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('url: ' + req.url);

    if (req.url === '/index' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
```
