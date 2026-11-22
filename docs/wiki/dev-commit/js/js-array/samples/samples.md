# Примеры

## Общее

```js
arr["someIndex"] = "someValue"; // Использование строки в виде индекса
arr.length = 10; // Все элементы с индексом 10 и больше будут удалены
delete arr[4]; // Удаление элемента по индексу 4: остаётся пустая ячейка (arr[4] вернёт undefined), length не меняется
const a = Array.isArray(arr); // Проверка на массив
```

## Простой перебор массива

```js
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
```

## Перебор массива и удаление выбранного элемента

```js
const id = 12;

for (let i = 0; i <= arr.length - 1; i++) {
  if (id == arr[i]) {
    arr.splice(i, 1);
    break;
  }
}
```

## Добавление нового элемента в массив

```js
if (arr != "") {
  arr[arr.length] = id;
} else {
  arr[0] = id;
}
```

## Удаление элемента массива

```js
// Если элемента нет, indexOf вернёт -1 и splice удалит последний элемент, поэтому нужна проверка
arr.splice(arr.indexOf(String(id)), 1);
```
