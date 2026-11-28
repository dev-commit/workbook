# MergeSort

::: warning

- Проверить код

:::

## Информация

- _Задача_: отсортировать массив слиянием (merge sort)
- Массив делится пополам, каждая половина сортируется рекурсивно, затем две отсортированные половины сливаются в одну
- Сложность - O(n log n)

## Слияние двух отсортированных массивов

```js
const merge = (left, right) => {
  const result = [];
  let i = 0;
  let j = 0;

  // Берём меньший из текущих элементов двух массивов
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Один из массивов закончился - добавляем остаток другого
  return [...result, ...left.slice(i), ...right.slice(j)];
};

merge([1, 3, 5], [2, 4, 6]); // => [1, 2, 3, 4, 5, 6]
merge([5, 6], [1, 2]); // => [1, 2, 5, 6]
```

## Сортировка слиянием

```js
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
};

mergeSort([5, 2, 4, 6, 1, 3]); // => [1, 2, 3, 4, 5, 6]
```

- Входные массивы не меняются: элементы читаются по индексам, а не вынимаются через `shift()`
- `<=` при равных элементах сохраняет их исходный порядок (устойчивая сортировка)
