# Array.prototype.find()

## Информация

::: tip Определение

- **find()** - возвращает _значение первого найденного в массиве элемента_, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается _undefined_
- **findIndex** - возвращает индекс найденного в массиве элемента вместо его значения

:::

```js
const arr = ["Jack", "Kate", "Tony"];

const result = arr.find((element) => {
  return element === "Tony";
});

console.log(result); // => Tony
```

```js
const arr = ["Jack", "Kate", "Tony"];

const result = arr.findIndex((element) => {
  return element === "Tony";
});

console.log(result); // => 2
```
