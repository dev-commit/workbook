# .finally

::: details Базовый пример

```js
Promise.resolve()
  .then(() => {
    return "1";
  })

  // .then вернул "1", но .finally пропустит его мимо себя
  .finally(data => {
      console.log(data); // => "undefined"
      return "2";
  })

  // из .finally вернули "2", но результат берется из предыдущего .then или .catch
  .then(data => console.log(data)) => "1"
```

```js
Promise.reject()
  // .finally выполняется в любом случае: даже при возникновении ошибки
  .finally((data) => {
    console.log("finally"); // => "finally"
  });
```

:::
