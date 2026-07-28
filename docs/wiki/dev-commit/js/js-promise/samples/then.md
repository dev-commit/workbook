# .then

::: details Возврат / не возврат значения из .then

```js
Promise.resolve("1")
  // Promise.resolve вернул "1"
  .then((data) => {
    console.log(data); // => "1"
  })

  // .then ничего не вернул
  .then((data) => {
    console.log(data); // => "undefined"
    return "2";
  })

  // .then вернул "2"
  .then((data) => {
    console.log(data); // => "2"
  });
```

:::

::: details Второй аргумент .then

- Если не используется один из аргументов - можно задать null

```js
Promise.reject(1)
  // skip
  // обработать reject можно только в .catch
  .then((data) => {
    console.log(data);
  })

  // второй аргумент .then вместо .catch
  .then(null, (data) => console.log(data)) // => 1

  // после обработки ошибки попадаем в .then
  // => "ok"
  .then(() => console.log("ok"));
```

```js
Promise.reject()
  // используем колбэки для .then и для .catch
  .then(
    (data) => console.log("ok"), // => skip
    (data) => console.log("error"), // => "error"
  );
```

:::

::: details null в .then

```js
Promise.resolve("1")
  // skip
  .then(null)

  // придут данные из Promise.resolve
  .then((data) => console.log(data)); // => "1"
```

:::
