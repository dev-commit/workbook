# ПотокиcreateReadStreamcreateWriteStream

```js
const fs = require('fs');

// поток на чтение
const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');

// поток на запись
const myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

// обработчик чтения данных
myReadShort.on('data', (chunk) => {
	console.log('Данные получены: \n' + chunk);
	// записываем в новый файл
	myWriteShort.write(chunk);
});
```
