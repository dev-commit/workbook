# Array.prototype.flatMap()

- Получить плоский массив из объекта

```js
const checkedRows = {
	'0': [1,2,3],
	'1': [4,5,6],
}

const b = Object.values(checkedRows).flatMap(value => value);
// => [1, 2, 3, 4, 5, 6]
```
