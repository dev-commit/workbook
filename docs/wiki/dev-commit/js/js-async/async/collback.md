# Collback Function

## Информация

::: tip Callback Function

- **Callback Function** - функция обратного вызова button.onclick = function() {}
  :::

## Пример

### Пример 1

```js
fade(this, 1000, function () {
  this.style.display = "none";
});

function fade(element, time, callbackFunction) {
  // Если callback не задан, создаем пустую функцию
  const callback = callbackFunction || function () {};
  // Вызываем callback когда необходимо
  callback.call(element); // передать новый контекст this
}
```

### Пример 2

```js
const greeting = function (callback) {
  const name = "Tony";
  return callback(name);
};

const a = greeting(function (name) {
  return "Hello " + name;
});
```
