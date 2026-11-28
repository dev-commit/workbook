# Node.js Stream

## Информация

::: info

- https://nodejs.org/api/stream.html#stream - Documentation: Node.js Stream

:::

::: tip Определение

- **Stream** - абстрактный интерфейс для работы с потоковыми данными в Node.js. Модуль node:stream предоставляет API для реализации потокового интерфейса

:::

- Стрим — это концепция, с помощью которой можно обрабатывать данные небольшими частями, что позволяет задействовать небольшой объем оперативной памяти. Также с ее помощью можно разбить обработку каждой части на независимые друг от друга модули (функции либо классы). Например, можно сразу сжать часть данных, потом зашифровать и записать в файл. Основная идея в том, чтобы не работать с данными целиком, а поочередно обрабатывать часть данных

### Stream VS Thread

- В контексте Node.js, _Streams_ позволяет работать с потоковыми данными, а _Thread_ относится к многопоточности (когда что-то может выполняться параллельно), например - Worker Threads

### 4 вида Stream в Node.js

- _Readable_ - чтение
- _Writable_ - запись
- _Duplex_ - чтение и запись
- _Transform_ - вид Duplex потока, который может изменять данные

::: info

- https://habr.com/ru/post/479048/ - Реализация стримов

:::

```js
const { Readable } = require("stream"); // Readable stream
const { Writable } = require("stream"); // Writable stream
const { Duplex } = require("stream"); // Duplex stream
const { Transform } = require("stream"); // Transform stream
```

## Создание Stream

```js
const { Readable } = require("stream");

const opt = {}; // Опции стрима

// 1 - Используя конструктор
const myReadable = new Readable(opt);

// 2 - Наследуя класс
class MyReadable extends Readable {
  constructor(opt) {
    super(opt);
  }
}
```

## Примеры

### Отправка файла клиенту

<v-two :title="['Используя Stream', 'Не используя Stream']">
<template #first>

- Загружаем часть файла и отправляем ее, до тех пор пока не отправим весь файл
- Не загружаем оперативную память

```js
const getFile = async (req, res, next) => {
  const fileStream = fs.createReadStream("path to file");

  res.contentType("application/pdf");

  fileStream.pipe(res);
};
```

</template>
<template #last>

- Загружаем файл полностью в оперативную память и затем отправляем

```js
const getFile = async (req, res, next) => {
  const file = fs.readFileSync("path to file");

  res.contentType("application/pdf");

  res.send(file);
};
```

</template>
</v-two>
