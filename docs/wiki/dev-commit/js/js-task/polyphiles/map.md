# Array.prototype.map

## Информация

::: tip Определение

- **map** - создает новый массив с результатом вызова указанной функции для каждого элемента массива

:::

```js
function map(arr, mapCallback) {
  // Проверяем переданные параметры
  if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== "function") {
    return [];
  } else {
    let result = [];
    // Мы создаем массив с результатами при каждом вызове функции
    // поскольку мы не хотим менять оригинальный массив
    for (let i = 0, len = arr.length; i < len; i++) {
      result.push(mapCallback(arr[i], i, arr));
      // Помещаем результаты mapCallback в result
    }
    return result;
  }
}
```
