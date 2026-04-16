# Объекты

## Обращение к функции как к объекту

```js
let test = function() {
	console.log('hi from object!');
}
test.method = function () {
	console.log('hi from method!');
}
test.method();
test();
```

## Объекты: копирование и null

```js
const a = {};

function clear (a) {
	a.a=10;
	a = null;
}

clear(a);
console.log(a); // => Object { a: 10 }
```

## Присвоение null

```js
const a = [];

function clear(arr) {
	// присвоение в локальную переменную
	arr.push(2);
	arr = null;
}
clear(a);

console.log(a); // [2]
```

## Функция withName

```js
const obj1 = {};

function withName(obj, name) {
	obj.name = name;
	return obj;
}

const obj2 = withName(obj1, 'Max');
console.log(obj2.name);     // 'Max'
console.log(obj1.name);     // 'Max'
console.log(obj1 === obj2); // true
```

## Обращение к объектам

```js
const a = { key: 'foo' };
const b = { key: 'bar' };
const c = {};
c[a] === c[b]	// => true
```
