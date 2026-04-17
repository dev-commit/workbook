# Event Loop

- **Event Loop** - позволяет Node.js выполнять асинхронные неблокирующие I/O (Input / Output) операции, несмотря на то что, JS является однопоточным. Путём выгрузки части операций в ядро, если это возможно.
- **I/O** - input/output операции
- **setImmediate** - применяется чтобы поставить функцию в очередь на выполнение без задержки. У setImmediate единственный аргумент – это функция, выполнение которой нужно запланировать (callback)
- **Object.observe()** - позволяет асинхронно отслеживать изменения состояния JavaScript объектов во времени, без использования каких-либо сторонних библиотек

## Event Loop

<!-- <img src="../@img/event-loop-common.png" width="100%"/> -->

---
- Формирование запроса I/O
- Обработка callback, поступившего из Event Loop
- Регистрация обращений к I/O
- Приём callback, который должен выполниться после запроса
- Возвращение управления обратно в "Приложение"
- Приём события, которое произошло
- Когда событие выполнено, то нужно загрузить callback "Обработчик"
- Копится очередь событий

libuv - приносит абстракцию над системный Демультиплексором. Т.к. в каждой система свой Демультиплексор (Linux, Windows и т.д.)

- Event Loop обращается в "Очередь событий", берёт событие, идёт в "Приложение" и вызывает callback "Обработчик"
- "Приложение" может выполнить "Обработчик" или запустить новый асинхронный запрос
- При отсутствии собыйтий в "Очереди событий", Event Loop возвращает управление в "Демультиплексор событий"
- Программа заканчивается, когда ничего нет в "Очередь событий" и "Демультиплексор событий"

## Event Loop structure

<!-- <img src="../@img/event-loop-structure.png" width="100%"/> -->

### 

- Попадают callback, которые добавляются через process.nextTick()
- Попадают Promise
- Если Event Loop находится не на фазах, то идёт исполнять приотритетные очереди: nextTickQueue и Other Microtasks Queue

### Фазы

- Попадают callback setTimeout и setInterval
- Для Libuv setTimeout и setInterval - это одна функция, но у setInterval есть параметр repeat
- Очередь куда попадают I/O операции (не все): connection к сети, коллбэки ошибок
- Нет доступа к этой фазе. Только Event Loop может попасть туда, н-р: перед тем как начинает читать файл, Event Loop может подготовить какие-то данные, то попадает в эту фазу
- Попадают I/O операции: начало чтение файла
- Попадают только setImmediate
- setImmediate применяется чтобы поставить функцию в очередь на выполнение без задержки. У setImmediate единственный аргумент – это функция, выполнение которой нужно запланировать (callback). Это callback попадает в Check
- Попадают callback вида "close": onClose, socketOnClose и т.д.

## Пример

```js
const fs = require('fs');
```

```js
console.log('START');                                             ..
```

- 1 - Синхронный код

```js
setTimeout(() => console.log('setTimeout 1'), 0);                 A
```

- 6 - Этап #1: Timers

```js
setImmediate(() => console.log('setImmediate'));                  B
```

- 8 - Этап #5: Check

- Этап Poll идет перед Check - Poll выполнится первым, но Callback перейдет на следующий Check
- Это при условии, что идет чтение файла readFile, на writeFile будет раньше (TODO: проверить)

```js
fs.readFile(__filename, () => {                                   C
    setTimeout(() => console.log('readFile setTimeout'), 0);      D
    setImmediate(() => console.log('readFile setImmediate'));     E
    process.nextTick(() => console.log('readFile Next Tick'));    F
});
```

- (C) Этап #4: Poll
- 9 (F) - Микротаска #1: nextTickQueue
- 10 (E) - Этап #5: Check
- 11 (D) - Этап #1: Timers

```js
Promise.resolve()
    .then(() => {                                                 G
        console.log('Promise');
        process.nextTick(() => console.log('Promise Next Tick')); H
    });
```

- 4 (G) - Микротаска #2: Other Microtasks Queue
- 5 (H) - Микротаска #1: nextTickQueue

```js
process.nextTick(() => console.log('Next Tick'));                 I
```

- 3 - Микротаска #1: nextTickQueue

```js
setTimeout(() => console.log('setTimeout 2'), 0);                 J
```

- 7 - Этап #1: Timers

```js
console.log('END');                                               ..
```

- 2 - Синхронный код
