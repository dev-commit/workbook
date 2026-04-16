# Дата и время

::: info
http://momentjs.com/
:::

## Создание

```js
new Date(year, month, date, hours, minutes, seconds, ms)
```

```js
const selectDate = new Date(2012,0,1,0,0,0); // объявление для заданной даты
const nowDate = new Date();                  // текущее дата и время на компьютере пользователя
```

## Установка значений

```js
const selectDate = new Date(2012,0,1,0,0,0);
```

```js
selectDate.setMinutes(25);                 // установка минут
setSeconds.setSeconds(25);                 // установка секунд
...
```

## Получение значений

```js
const nowDate = new Date();
```

```js
const yearFull = nowDate.getFullYear();      // год (4 цифры)
const month    = nowDate.getMonth();         // месяц (от 0 до 1)
const day      = nowDate.getDate();          // число месяца (от 1 до 31)
const dayWeek  = nowDate.getDay();           // день недели (от 0-воскресенье до 6-суббота)
const hour     = nowDate.getHours();         // час
const minutes  = nowDate.getMinutes();       // минуты
const seconds  = nowDate.getSeconds();       // секунды
const mseconds = nowDate.getMilliseconds();  // миллисекунды
```

## Date.parse

- YYYY-MM-DD - дата в формате год-месяц-день
- Обычный символ T используется как разделитель
- HH:mm:ss.sss – время: часы-минуты-секунды-миллисекунды
- Часть 'Z' обозначает временную зону – в формате +-hh:mm, либо символ Z, обозначающий UTC

- Метод Date.parse(str) разбирает строку str в таком формате и возвращает соответствующее ей количество миллисекунд. Если это невозможно, Date.parse возвращает NaN

```js
const msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC
alert( msUTC ); // 1327571510417 (число миллисекунд)

const ms = Date.parse('2012-01-26T13:51:50.417-07:00'); // С таймзоной -07:00 GMT
alert( ms ); // 1327611110417 (число миллисекунд)
```

### Строковое и численное преобразование

```js
alert( new Date() );  // toString: Дата в виде читаемой строки
alert( +new Date() ); // valueOf: кол-во миллисекунд, прошедших с 01.01.1970
```

## toLocaleString

```js
const date = new Date(2014, 11, 31, 12, 30, 0);

const options = {
	era: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
	timezone: 'UTC',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric'
};

alert( date.toLocaleString("ru", options) );    // среда, 31 декабря 2014 г. н.э. 12:30:00
alert( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM
```

```js
const a = nowDate.toLocaleTimeString(); // время с учетом локализации
const a = nowDate.toLocaleDateString(); // дата с учетом локализации
```

```js
// вывод зависит от браузера
const d = new Date();
const a = d.toString();     // возвращает дату целиком 'Wed Jan 26 2011 16:40:50 GMT+0300'
const a = d.toDateString(); // возвращает только дату
const a = d.toTimeString(); // возвращает только время
```

## GMT и UTC

- Все методы, указанные выше, возвращают результат для местной временной зоны
- Существуют также UTC-варианты этих методов, возвращающие день, месяц, год и т.п. для зоны GMT+0 (UTC): getUTCFullYear(), getUTCMonth(), getUTCDay() и т.д.

```js
const a = nowDate.getHours();          // время по гринвичу (GMT)
const a = nowDate.getUTCHours();       // время в формате UTC
const a = nowDate.getTimezoneOffset(); // возвращает разницу между местным и UTC-временем, в минутах.
```

## Другие методы

```js
const a = nowDate.toTimeString(); // вывод времени в виде строки
const a = nowDate.toDateString(); // вывод даты в виде строки
```

```js
const selectDate = new Date(2012,0,1,0,0,0);
const a = selectDate.getTime();  // возвращает число миллисекунд, прошедших с 1 января 1970 года GMT+0
```

```js
const timeInMs = Date.now();     // возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
```

## Примеры

### Вывод текщей даты

```js
const weekday = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = [
	'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
	'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];

const nowDate = new Date();
const nowDay = weekday[nowDate.getDay()];
const nowDate = nowDate.getDate();
const nowMonth = month[nowDate.getMonth()];
```

### Разность дат

```js
const start = new Date; // засекли время

// что-то сделать
for (let i = 0; i < 100000; i++) {
  const doSomething = i * i * i;
}

const end = new Date; // конец измерения
console.log( "Цикл занял " + (end - start) + " ms" );
```
