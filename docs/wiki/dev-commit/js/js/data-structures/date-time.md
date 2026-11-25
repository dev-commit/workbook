# Дата и время

## Информация

::: info

- http://momentjs.com/ - Moment.js

:::

## Варианты

### Создание

```js
new Date(year, month, date, hours, minutes, seconds, ms);

const selectDate = new Date(2012, 0, 1, 0, 0, 0); // Объявление для заданной даты
const nowDate = new Date(); // Текущие дата и время на компьютере пользователя
```

### Установка значений

```js
const selectDate = new Date(2012, 0, 1, 0, 0, 0);

selectDate.setMinutes(25); // Установка минут
selectDate.setSeconds(25); // Установка секунд
...
```

### Получение значений

```js
const nowDate = new Date();

const yearFull = nowDate.getFullYear(); // Год (4 цифры)
const month = nowDate.getMonth(); // Месяц (от 0 до 11)
const day = nowDate.getDate(); // Число месяца (от 1 до 31)
const dayWeek = nowDate.getDay(); // День недели (от 0-воскресенье до 6-суббота)
const hour = nowDate.getHours(); // Час
const minutes = nowDate.getMinutes(); // Минуты
const seconds = nowDate.getSeconds(); // Секунды
const mseconds = nowDate.getMilliseconds(); // Миллисекунды
```

## Метод `Date.parse`

**Формат представления даты `YYYY-MM-DDTHH:mm:ss.sss`**

- `YYYY-MM-DD` - дата в формате год-месяц-день
- Обычный символ `T` используется как разделитель
- `HH:mm:ss.sss` – время: часы-минуты-секунды-миллисекунды
- Часть `'Z'` обозначает временную зону – в формате `+-hh:mm`, либо символ `Z`, обозначающий UTC

**Date.parse(str)**

- Метод `Date.parse(str)` разбирает строку str в таком формате и возвращает соответствующее ей количество миллисекунд. Если это невозможно, `Date.parse` возвращает NaN

```js
const msUTC = Date.parse("2012-01-26T13:51:50.417Z"); // Зона UTC
console.log(msUTC); // 1327571510417 (число миллисекунд)

const ms = Date.parse("2012-01-26T13:51:50.417-07:00"); // С таймзоной -07:00 GMT
console.log(ms); // 1327611110417 (число миллисекунд)
```

**Строковое и численное преобразование**

```js
console.log(new Date()); // toString: Дата в виде читаемой строки
console.log(+new Date()); // valueOf: кол-во миллисекунд, прошедших с 01.01.1970
```

## Метод `toLocaleString`

```js
const date = new Date(Date.UTC(2014, 11, 31, 12, 30, 0));

const options = {
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timeZone: "UTC",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

console.log(date.toLocaleString("ru", options)); // среда, 31 декабря 2014 г. от Рождества Христова в 12:30:00
console.log(date.toLocaleString("en-US", options)); // Wednesday, December 31, 2014 Anno Domini at 12:30:00 PM
```

```js
const a = nowDate.toLocaleTimeString(); // Время с учетом локализации
const a = nowDate.toLocaleDateString(); // Дата с учетом локализации
```

```js
// Вывод зависит от браузера
const d = new Date();
const a = d.toString(); // Возвращает дату целиком 'Wed Jan 26 2011 16:40:50 GMT+0300'
const a = d.toDateString(); // Возвращает только дату
const a = d.toTimeString(); // Возвращает только время
```

## GMT и UTC

- Все методы, указанные выше, возвращают результат для местной временной зоны
- Существуют также UTC-варианты этих методов, возвращающие день, месяц, год и т.п. для зоны GMT+0 (UTC): getUTCFullYear(), getUTCMonth(), getUTCDay() и т.д.

```js
const a = nowDate.getHours(); // Время по местному часовому поясу
const a = nowDate.getUTCHours(); // Время в формате UTC
const a = nowDate.getTimezoneOffset(); // Возвращает разницу между местным и UTC-временем, в минутах.
```

## Методы `toTimeString()`, `toDateString()`

```js
const a = nowDate.toTimeString(); // Вывод времени в виде строки
const a = nowDate.toDateString(); // Вывод даты в виде строки
```

## Методы `getTime()`, `now()`

```js
const selectDate = new Date(2012, 0, 1, 0, 0, 0);
const a = selectDate.getTime(); // Возвращает число миллисекунд, прошедших с 1 января 1970 года GMT+0
```

```js
const timeInMs = Date.now(); // Возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
```

## Примеры

::: details Вывод текущей даты

```js
const weekday = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const month = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const nowDate = new Date();
const nowDay = weekday[nowDate.getDay()];
const nowDayOfMonth = nowDate.getDate();
const nowMonth = month[nowDate.getMonth()];
```

:::

::: details Разность дат

```js
const start = new Date(); // Засекли время

// Что-то сделать
for (let i = 0; i < 100000; i++) {
  const doSomething = i * i * i;
}

const end = new Date(); // Конец измерения
console.log("Цикл занял " + (end - start) + " ms");
```

:::
