# Факториал (Factorial Algorithm)

## Решение

**Через цикл**

```js
function factorial(n) {
  let result = 1;
  while (n) {
    result *= n--;
  }
  return result;
}
```

**Через рекурсию**

```js
function factorial(n, result) {
  result = result || 1;
  if (!n) {
    return result;
  } else {
    return factorial(n - 1, result * n);
  }
}
```
