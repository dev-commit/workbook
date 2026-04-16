# Сортировка нечетных значений

### Постановка задачи

- Отсортировать нечетные значения в массиве по возрастанию.
- Чётные значения оставить на прежних местах

```js
[5, 2, 7, 4, 1, 3] // Было
[1, 2, 3, 4, 5, 7] // Стало
```

### Подробное решение

```js
const sort = arr => {
  let arrOdd = arr
    .filter(element => element % 2 !== 0)
    .sort();
  
  const result = arr.map((element) => {
    if (element % 2 !== 0) {
      const odd = arrOdd[0];
      arrOdd = arrOdd.slice(1);
  
      return odd;
    }
    
    return element;
  });
  
  return result
}
```

### Краткое решение

```js
const sort = arr => {
	const oddArr = arr.filter(item => item % 2).sort();  
 	return arr.map(item => item % 2 ? oddArr.shift() : item);
}
```
