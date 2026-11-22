# Array.prototype.filter

## Информация

::: tip Определение

- **filter** - создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции

:::

```js
function filter(arr, filterCallback) {
  // Проверяем передаваемые параметры
  if (
    !Array.isArray(arr) ||
    !arr.length ||
    typeof filterCallback !== "function"
  ) {
    return [];
  } else {
    let result = [];
    // ...
    for (let i = 0, len = arr.length; i < len; i++) {
      // Определяем соответствие возвращаемого результата заданному условию
      if (filterCallback(arr[i], i, arr)) {
        // Помещаем значение, прошедшее фильтр, в result
        result.push(arr[i]);
      }
    }
    return result;
  }
}
```
