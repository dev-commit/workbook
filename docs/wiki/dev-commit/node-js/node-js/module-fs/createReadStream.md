# Потоки: `createReadStream`, `createWriteStream`

```js
const fs = require("fs");

// Поток на чтение
const myReadShort = fs.createReadStream(__dirname + "/article.txt", "utf8");

// Поток на запись
const myWriteShort = fs.createWriteStream(__dirname + "/news.txt");

// Обработчик чтения данных
myReadShort.on("data", (chunk) => {
  console.log("Данные получены: \n" + chunk);
  // Записываем в новый файл
  myWriteShort.write(chunk);
});
```
