# Таймеры

> Минимальная задержка таймера от 0 до 4мс

## setTimeout

### Объявление

::: danger

**`setTimeout(func/code, delay, [arg1, arg2...])`** - однократное выполнение кода через некоторое время

> - `func/code` - функция или строка кода для исполнения
> - `delay` - задержка в миллисекундах, 1000 миллисекунд равны 1 секунде
> - `arg1, arg2…` - aргументы, которые нужно передать функции

:::

::: danger

**`clearTimeout(timerId)`** - останавливает исполнение setTimeout

> - `timerId` - числовой идентификатор таймера

:::

### Варианты

**Базовый код**

```js
// Если первый аргумент является строкой, то интерпретатор создаёт анонимную функцию из этой строки
const timer = setTimeout("console.log('go');", 1000);

// Анонимная функция
const timer = setTimeout(function () {
  console.log("go");
}, 1000);

// Фнкция
const timer = setTimeout(func, 1000);

function func() {
  console.log("go");
}

clearTimeout(timer);
```

**Передача аргументов**

```js
setTimeout(func, 1000, "Привет", "Tony"); // => "Привет Tony"

function func(phrase, who) {
  console.log(phrase + " " + who);
}
```

**Рекурсивный setTimeout (альтернатива setInterval)**

```js
const timerId = setTimeout(function tick() {
  console.log("тик");
  timerId = setTimeout(tick, 2000);
}, 2000);
```

## setInterval

### Объявление

::: danger

**`setInterval(func/code, delay, [arg1, arg2...])`** - повторение выполнения кода через определенное время

> - `func/code` - функция или строка кода для исполнения
> - `delay` - задержка в миллисекундах, 1000 миллисекунд равны 1 секунде
> - `arg1, arg2…` - aргументы, которые нужно передать функции

:::

::: danger

**`clearInterval(timerId)`** - останавливает исполнение setInterval

> - `timerId` - числовой идентификатор таймера

:::

### Варианты

```js
const timer = setInterval("console.log('go');", 1000);
clearInterval(timer);
```
