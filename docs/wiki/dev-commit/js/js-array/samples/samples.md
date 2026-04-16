# Примеры

### Общее

```js
arr['someIndex'] = 'someValue'; // использование строки в виде индекса
arr.length = 10;                // все элементы больше 10 индекса будут удалены
delete arr[4];                  // присваивание элементу по индексу 4 undefined
const a = Array.isArray(arr);   // проверка на массив
```

### Простоой перебор массива

```js
for (let i=0; i<=arr.length-1; i++) {
	console.log(arr[i]);
}
```

### Перебор массива и удаление выбранного элемента

```js
const id = 12;

for (let i=0; i<=arr.length-1; i++) {
	if (id == arr[i]) {
		arr.splice(i, 1);
		break;
	}
}
```

### Добавление нового элемента в массив

```js
if (arr != '') {
	arr[arr.length] = id;
} else {
	arr[0] = id;
}
```

### Удаление элемента массива

```js
arr.splice(arr.indexOf(String(id)), 1);
```
