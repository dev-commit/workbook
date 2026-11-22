# every() / some()

## Информация

::: danger

**`arr.every / some(callback, thisArg)`** - проверяет, удовлетворяют ли _все/какие-нибудь_ элементы массива условию, заданному в передаваемой функции

> - `callback` - функция проверки каждого элемента, принимает три аргумента:
>   - `currentValue` - текущий обрабатываемый элемент массива
>   - `index` - индекс текущего обрабатываемого элемента в массиве
>   - `array` - массив, по которому осуществляется проход
> - `thisArg` - необязательный параметр. Значение, используемое в качестве this при вызове функции callback
> - _return_ - true, если функция проверки возвращает truthy значение для _каждого/хотя бы одного_ элемента массива. Иначе, false

:::

- Используется для проверки массива
- Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr
- Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr

## Пример 1: Использование callback-функции

```js
const arr = [1, -1, 2, -2, 3];

// false, не все положительные
const result = arr.every((number) => {
  return number > 0;
});

// true, есть хоть одно положительное
const result = arr.some((number) => {
  return number > 0;
});
```

## Пример 2: Вынесение callback-функции

```js
const arr = [1, -1, 2, -2, 3];

const isPositive = (number) => {
  return number > 0;
};

const result = arr.every(isPositive);
const result = arr.some(isPositive);
```
