# Функции высшего порядка (Higher Order Functions)

::: tip Функции высшего порядка

- **Функции высшего порядка** - функция принимающая в качестве аргументов другие функции или возвращающая другую функцию в качестве результата
  :::

```js
function higherOrderFunction(param, callback) {
  return callback(param);
}
```
