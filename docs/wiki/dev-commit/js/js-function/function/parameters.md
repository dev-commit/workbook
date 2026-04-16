# Параметры функции (ES6)

## Параметры по умолчанию (default parameters)

- Параметры по умолчанию будут срабатывать если параметр не передан или параметр равен undefined

```js
function greet(greeting='Hello', name='Friend') {
	console.log(greeting + ' ' + name);
}
greet();
```

## Псевдомассив аргументов arguments (ES5)

```js
// arguments в ES5 - псевдо-массив, содержащий переданные агрументы
[object Arguments] {
	0: arg1,
	1: arg2, 
	2: arg3
}
```

```js
function my() {
	// конвертация в обычный массив
	let arr = Array.prototype.slice.call(arguments);
	console.log(arr); // => [1, 2, 3]
}
my(1, 2, 3);
```

## Оставшиеся параметры (rest parameters)

- Синтаксис отдельных параметров превращает отдельные элементы в масссив
- Ограничение 1: Rest-параметр обязан идти последним в функции
- Ограничение 2: Нельзя иметь больше одного rest-параметра

```js
function my(...numbers) {
	console.log(numbers); // => [1, 2, 3]
}
my(1, 2, 3);
```

```js
function my(a, b, ...numbers) {
	console.log(a);       // => 1
	console.log(b);       // => 2
	console.log(numbers); // => [3, 4]
}
my(1, 2, 3, 4);
```
