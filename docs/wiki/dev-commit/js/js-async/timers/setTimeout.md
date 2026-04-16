# Таймеры

- Минимальная задержка таймера от 0 до 4мс

## setTimeout

		однократное выполнение кода через некоторое время
	
функция или строка кода для исполнения
задержка в миллисекундах, 1000 миллисекунд равны 1 секунде
aргументы, которые нужно передать функции

останавливает исполнение setTimeout
числовой идентификатор таймера

```js
// если первый аргумент является строкой, то интерпретатор создаёт анонимную функцию из этой строки
const timer = setTimeout("console.log('go');", 1000);
// анонимная функция
const timer = setTimeout(function() { console.log('go'); }, 1000);
// функция
const timer = setTimeout(func, 1000);

function func() {
    console.log('go');
}

clearTimeout(timer);
```

### Передача аргументов

```js
setTimeout(func, 1000, 'Привет', 'Tony'); // Привет Tony
function func(phrase, who) {
	console.log(phrase + ' ' + who);
}
```

### Рекурсивный setTimeout (альтернатива setInterval)

```js
const timerId = setTimeout(function tick() {
	console.log( "тик" );
	timerId = setTimeout(tick, 2000);
}, 2000);
```

## setInterval

		повторение выполнения кода через определенное время
	
функция или строка кода для исполнения
задержка в миллисекундах, 1000 миллисекунд равны 1 секунде
aргументы, которые нужно передать функции

останавливает исполнение setInterval
числовой идентификатор таймера

```js
const timer = setInterval("console.log('go');", 1000);
clearInterval(timer);
```
