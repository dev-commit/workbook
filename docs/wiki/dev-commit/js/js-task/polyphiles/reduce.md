# Array.prototype.reduce

## Информация

::: tip Определение

- **reduce** - применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение

:::

```js
function reduce(arr, reduceCallback, initialValue) {
  // ..
  if (
    !Array.isArray(arr) ||
    (!arr.length && initialValue === undefined) ||
    typeof reduceCallback !== "function"
  ) {
    // Как и нативный reduce, выбрасываем ошибку
    throw new TypeError("Invalid arguments");
  } else {
    // Если в функцию не было передано значения initialValue, то
    let hasInitialValue = initialValue !== undefined;
    let value = hasInitialValue ? initialValue : arr[0];
    // мы будем использовать первый элемент массива

    // Затем мы перебираем массив, начиная с 1, если в функцию не передавалось значения initialValue,
    // либо с 0, если значение было передано
    for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
      // Затем на каждой итерации мы присваиваем результат вызова reduceCallback переменной
      value = reduceCallback(value, arr[i], i, arr);
    }
    return value;
  }
}
```
