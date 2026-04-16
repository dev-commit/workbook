# Array Intersection (Пересечение массивов)

### reduce()

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];

const interseption = (a, b) => {
	return a.reduce((acc, item) => {
		// Уникальный элемент пушим в массив
		b.find((i) => i === item) && acc.push(item);
		return acc;
	}, []);
}

const data = interseption(arr1, arr2);
console.log(data); // [4, 5]
```

### forEach

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const arr3 = [];
const obj = {}

arr2.forEach(el => {
    obj[el] = true;
})

arr1.forEach(element => {
    if (obj[element]) {
        arr3.push(element);
    }
})

console.log(arr3); // => [4, 5]
```

### Set()

```js
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);

const interseption = new Set([...a].filter(
    x => b.has(x)
));
```

### Структуры данных

#### Неоптимально

```js
let resultArr = arr0.filter(item => {
    return arr1.indexOf(item) !== -1
})
```

#### Оптимально

```js
let hashMap = {};

arr1.forEach(item => {
    hashMap[item] = null;
})

let resultArr = arr0.filter(item => {
    return typeof hashMap[item] !== undefined;
})
```
