# Объявление

## Информация

::: tip Определение

- **Function Declaration** - функция, объявленная в основном потоке кода, создаются интерпретатором до выполнения кода
- **Function Expression** - объявление функции в контексте какого-либо выражения, например присваивания. Создаются в процессе выполнения выражения, в котором созданы, в данном случае при операции присваивания

:::

## 1. Function Declaration

```js
function func(num) {
  console.log(num);
}
func(1);
```

```js
// Присвоили ссылку на функцию
const a = func;
function func() {
  //
}
```

## 2. Function Expression (выражения функции)

```js
const func = function (num) {
  console.log(num);
};
func(2);
```

```js
const Task = function Task() {
  //
};
// Создание нового объекта, используя функцию Task
const task = new Task();
```

### Функцию можно скопировать в другую переменную

```js
function sayHi() {
  // Создать функцию и поместить её в переменную sayHi
  console.log("Привет");
}

const func = sayHi; // Копирование функции в новую переменную
func(); // Привет    // Функцию можно вызывать и как sayHi() и как func()

sayHi = null;
sayHi(); // Ошибка
```

## 3. IIFE (анонимная с немедленным вызовом - самовызывающаяся)

::: tip Определение

- **Immediately-Invoked Functional Expression (IIFE)** - немедленно вызываемое функциональное выражение

:::

- Если браузер видит _function_ в основном потоке кода – он считает, что это _Function Declaration_
- Если же _function_ идёт в составе более сложного выражения, то он считает, что это _Function Expression_
- Скобки в анонимной функции нужны чтобы показать, что это _Function Expression_, который по правилам JavaScript можно вызвать «на месте»

```js
(function (num) {
  console.log(num);
})(3);
```

```js
const count = (function (num) {
  console.log(num);
})(3);
```

### Анонимная функция

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  function () {
    console.log("Вы согласились.");
  },
  function () {
    console.log("Вы отменили выполнение.");
  },
);
```

### Возвращение функции

```js
const func = function () {
  return function () {
    console.log("Hi");
  };
};
func()();
```

## 4. new Function

**new Function(params, code)**

- _params_ - параметры функции через запятую в виде строки
- _code_ - код функции в виде строки

```js
// Создание функции из строки
const sum = new Function("a,b", "return a+b;");
const result = sum(1, 2);
console.log(result); // 3
```
