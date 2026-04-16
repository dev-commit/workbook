# Объявление

- **Function Declaration** - функция, объявленная в основном потоке кода, создаются интерпретатором до выполнения кода
- **Function Expression** - объявление функции в контексте какого-либо выражения, например присваивания. Создаются в процессе выполнения выражения, в котором созданы, в данном случае при операции присваивания

## 1. Function Declaration

```js
function func(num) {
	console.log(num);
}
func(1);
```

```js
// присвоили ссылку на функцию
const a = func;
function func(){
	//
}
```

## 2. Function Expression (выражения функции)

```js
const func = function(num) {
	console.log(num);
}
func(2);
```

```js
const Task = function Task() {
	//
}
// создание нового объекта использую функцию Task
const task = new Task();
```

### Функцию можно скопировать в другую переменную

```js
function sayHi() {   // создать функцию и поместить её в переменную sayHi
	alert( "Привет" );
}

const func = sayHi;    // копирование функции в новую переменную
func(); // Привет    // функцию можно вызывать и как sayHi() и как func()

sayHi = null;
sayHi();             // ошибка
```

## 3. IIFE (анонинимная с немедленным вызовом - самовызывающаяся)

- **Immediately-Invoked Functional Expression (IIFE)** немедленно вызываемое функциональное выражение

- Если браузер видит function в основном потоке кода – он считает, что это Function Declaration
- Если же function идёт в составе более сложного выражения, то он считает, что это Function Expression
- Скобки в анонимной функции нужны чтобы показать, что это Function Expression, который по правилам JavaScript можно вызвать «на месте»

```js
(function(num) {
	console.log(num);
})(3);
```

```js
const count = (function(num) {
	console.log(num);
})(3);
```

### Анонимная функция

```js
function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask(
	"Вы согласны?",
	function() { alert("Вы согласились."); },
	function() { alert("Вы отменили выполнение."); }
);
```

### Возвращение функции

```js
const func = function() {
	return function() {
		console.log('Hi');
	}
}
func()();
```

## 4. new Function

- params - параметры функции через запятую в виде строки
- code - код функции в виде строки

```js
// создание функции из строки
const sum = new Function('a,b', 'return a+b;');
const result = sum(1, 2);
alert(result); // 3
```
