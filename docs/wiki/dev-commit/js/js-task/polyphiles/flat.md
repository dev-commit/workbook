# flat

- **flat** - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth

Задача: Превращение массива неогранчиенной вложенности в плоский

### Решение

```js
const arr = [1,2,3, [4,5,6,7, [8,9,10]]];

function flattenDeep(arr) {
	let result = [];

	arr.forEach(element => {
		if (!Array.isArray(element)) {
			result.push(element);
		} else {
			result.push(...flattenDeep(element));
		}
	});
	
	return result;
}

console.log(flattenDeep(arr)); // => [1,2,3,4,5,6,7,8,9,10]
```

```js
flattenDeep([1,2,3, [4,5,6,7, [8,9,10]]]);        // => [1,2,3,4,5,6,7,8,9,10]
flattenDeep([1, 2, 3, [4, 5] ]);                  // => [1,2,3,4,5]
flattenDeep([1, [2, [3, 4], [[5]]]]);             // => [1,2,3,4,5]
flattenDeep([[1],[2],[3]]);                       // => [1,2,3]
flattenDeep([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // => [1,2,3]
```
- Проверку !Array.isArray(element) можно заменить на typeof element !== 'object'

### Решение 2

- Ошибка: Uncaught RangeError: Maximum call stack size exceeded

```js
const deepArray = [1, 2, [3, 4, [5, 6, 7]]];

const flatten = deepArray => {
	const ans = [];
	
	const innerFn = el => {
		if (!Array.isArray(el)) {
			ans.push(el);
		} else {
			innerFn(el);
		}
	}
	
	deepArray.forEach(innerFn);
	
	return ans;
}

flatten(deepArray); // => [1, 2, 3, 4, 5, 6, 7]
```
