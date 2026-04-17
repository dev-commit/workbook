# .pipe

### Взять файл article.txt и записать его в news.txt

```js
const fs = require('fs');

const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
const myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.pipe(myWriteShort);
```

### Вывод текстового файла на страницу

```js
const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');
    myReadShort.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Отслеживаем порт 3000');
```

### Вывод html на страницу

```js
const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    const myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadShort.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Отслеживаем порт 3000');
```

### Вывод json на страницу

```js
const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    const obj = {
        model: 'Audi',
        speed: '234',
        wheels: 4
    };
    // конвертация в строку
    res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1');
console.log('Отслеживаем порт 3000');
```
