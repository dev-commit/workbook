# flat

## Информация

::: tip Определение

- **flat** - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth

:::

- _Задача_: Превращение массива неограниченной вложенности в плоский

## Решение

```js
const arr = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10]]];

function flattenDeep(arr) {
  let result = [];

  arr.forEach((element) => {
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
// Варианты
flattenDeep([1, 2, 3, [4, 5, 6, 7, [8, 9, 10]]]); // => [1,2,3,4,5,6,7,8,9,10]
flattenDeep([1, 2, 3, [4, 5]]); // => [1,2,3,4,5]
flattenDeep([1, [2, [3, 4], [[5]]]]); // => [1,2,3,4,5]
flattenDeep([[1], [2], [3]]); // => [1,2,3]
flattenDeep([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // => [1,2,3]
```

- Проверку _!Array.isArray(element)_ можно заменить на _typeof element !== 'object'_
