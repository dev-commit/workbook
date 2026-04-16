# Функция, считающая кол-во своих вызовов

```js
const func = function() {
	func.counter = func.counter || 0;
	return ++func.counter;
};

console.log(func()); // 1
console.log(func()); // 2
console.log(func()); // 3
```
