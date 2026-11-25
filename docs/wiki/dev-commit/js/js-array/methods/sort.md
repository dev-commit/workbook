# sort(), toSorted()

## Информация

::: info

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort - MDN: sort()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted - MDN: toSorted()

:::

## `sort()` vs `toSorted()`

<v-two :title="['sort()', 'toSorted()']">
<template #first>

```js
const arr = ["c", "a", "b"];
const newArr = arr.sort();

// MUTABLE
console.log(arr); // => ['a', 'b', 'c'];
console.log(newArr); // => ['a', 'b', 'c'];
```

</template>
<template #last>

```js
const arr = ["c", "a", "b"];
const newArr = arr.toSorted();

// IMMUTABLE
console.log(arr); // => ['c', 'a', 'b'];
console.log(newArr); // => ['a', 'b', 'c'];
```

</template>
</v-two>

## Правила

- Сортировка по алфавиту, преобразуя элементы к строке
- Дефолтная сортировка - по возрастанию
- Можно задать функцию сравнения

## Функция сравнения

```js
const numbers = [10, 5, 200];

// Сортировка по возрастанию (по умолчанию)
// => [5, 10, 200]
const a1 = numbers.toSorted((a, b) => {
  return a - b;
});

// Сортировка по убыванию
// => [200, 10, 5]
const a2 = numbers.toSorted((a, b) => {
  return b - a;
});

// Добавление логики (сортировка по возрастанию)
// => [5, 10, 200]
const a3 = numbers.toSorted((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
```

**Возвращаемые значения из функции сравнения**

| Значение | Результат           |
| -------- | ------------------- |
| `< 0`    | `a` первый          |
| `=== 0`  | Ничего не изменится |
| `> 0`    | `b` первый          |
