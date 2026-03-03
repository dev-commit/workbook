# Массивы и циклы

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Объявление массива

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js
const arr = []; // Объявление пустого массива
const arr = ["Tony", "Anne"]; // Объявление массива из заполненных элементов
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Цикл for

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `break` - выход из цикла
- `continue` - прекращает выполнение текущей итерации цикла и переходит на следующую

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

### Перебор массива через цикл for

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

```js
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
```
