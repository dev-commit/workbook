# Последовательность Фибоначчи (Fibonacci Sequence)

## Информация

- Принимает индекс элемента последовательности, возвращает значение
- Последовательность: 0 1 1 2 3 5 8 13 21 34 55 ...

## Решение

::: details 🔥 Решение 1: Оптимальное решение (сложность единичная, линейная)

- Нумерация индеков с 0

```js
const fibonacci = (n) => {
  const arrFib = [0, 1];

  while (arrFib.length <= n) {
    arrFib.push(arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2]);
  }
  return arrFib[n];
};

console.log(fibonacci(0)); // 13
```

- Нумерация индеков с 1

```js
const fibonacci = (n) => {
  const arrFib = [0, 1];

  while (arrFib.length < n) {
    arrFib.push(arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2]);
  }
  return n ? arrFib[n - 1] : "Неверный индекс";
};

console.log(fibonacci(7)); // 8
```

:::

::: details Решение 2: Рекурсивное решение (сложность 2 в степени n)

```js
const fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10) === 55);
```

:::
