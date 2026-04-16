# Замыкания

## makeCounter

```js
let makeCount = 0;

function makeCounter() {
	return function () {
		return makeCount++;
	};
}

var counter = makeCounter();
var counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 2
console.log(counter2()); // 3
```

## Исправить ошибку. Проверка должна возвращать истину

```js
function closure() {
	return (function() {
		const arr = [];
		
		for (var i=0; i < 10; i++) {
			arr.push(function() {
				return i
			});
		}
		
		return arr;
	})();
}

console.log(closure()[3]() === 3); // => должно быть "true"
```
- Решение 1: поменять "var" на "let"
- Решение 2: добавить "bind"

## const a = 20 в замыкании

```js
function foo() {
	const a = 20
	return function() {
		console.log(a);
	}
}

const a = 10
const bar = foo()
bar(); // 20
```
