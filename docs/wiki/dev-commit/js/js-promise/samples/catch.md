# .catch

::: details Ошибка из Promise.reject

```js
Promise.reject("Api Error")
  // skip из-за Promise.reject
  .then((data) => console.log("ok"))

  // обработка ошибки
  .catch((error) => {
    console.log(error); // => "Api Error"
    return "1";
  })

  // catch вернул "1"
  .then((data) => {
    console.log(data); // => "1"
  });
```

:::

::: details Ошибка из Promise.reject из .catch

```js
Promise.reject()
  // обработка Promise.reject
  .catch(() => {
    console.log("error1"); // => "error1"
    return Promise.reject();
    // аналогично
    // return reject();
  })

  // обработка Promise.reject из предыдущего .catch
  .catch(() => {
    console.log("error2"); // => "error2"
  });
```

:::

::: details Ошибка throw new Error

```js
Promise.resolve()
  .then((data) => {
    // возникновение ошибки
    throw new Error("Api Error");
    // не имеет значения, что вернули
    return 1;
  })

  // skip, потому что предыдущий .then бросил ошибку
  .then((data) => console.log("ok"))

  // обработка ошибки
  .catch((error) => {
    console.log(error.message); // => "Api Error"
    return "2";
  })

  // .catch вернул "2"
  .then((data) => {
    console.log(data); // => "2"
  });
```

:::

::: details Необработанная ошибка в Promise

- Необработанная ошибка в Promise не влияет на работу программы
- Promise не выпускает ошибку за свои пределы

```js
Promise.resolve().then(() => {
  throw new Error("Api Error");
});

// код будет работать
setTimeout(() => {
  console.log("setTimeout"); // => "setTimeout"
}, 1000);
```

:::

::: details null в .catch

```js
Promise.reject("Api Error")
  // skip: ошибку не обработали
  .catch(null)

  // skip из-за необработанной ошибки
  .then((data) => console.log("ok"))

  // обработка ошибки
  .catch((error) => console.log(error)) // => "Api Error"

  // .then выполнится
  .then((data) => console.log("ok")); // => "ok"
```

:::
