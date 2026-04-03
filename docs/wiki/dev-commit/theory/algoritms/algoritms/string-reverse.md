# Алгоритм переворота строки (String Reverse Algorithm)

## Пример

- Задача: Реализуйте функцию reverse, которая переворачивает строку. Например:

```jsx
reverse("hello, world!"); // !dlrow ,olleh
```

::: details Решение через массив

```js
function reverse(str) {
  return str.split("").reverse().join("");
}
```

:::

::: details Решение чрезе цикл while

```js
function reverse(str) {
  let i = str.length - 1;
  let result = "";

  while (i >= 0) {
    result = result + str[i];
    i = i - 1;
  }

  return result;
}
```

:::

::: details Решение через цикл for

```js
function reverse(str) {
  const newStr = "",
    i;

  for (i = str.length - 1; i >= 0; i--) {
    newStr += str.charAt(i);
  }
  return newStr;
}
```

:::
