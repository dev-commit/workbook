# Retrier

::: warning

- Проверить код

:::

## Информация

- _Задача_: написать Retrier, который делает запрос по URL
- В случае неудачи он должен повторить запрос указанное количество раз
- Если после всех попыток результата нет, выбросить исключение

## Реализация

```js
const retrier = async (url, retryCount) => {
  // Первая попытка + retryCount повторов
  for (let attempt = 0; attempt <= retryCount; attempt++) {
    try {
      const response = await fetch(url);

      // fetch не выбрасывает ошибку на ответы 4xx / 5xx - проверяем статус сами
      if (response.ok) return response;
    } catch {
      // Сетевая ошибка - пробуем ещё раз
    }
  }

  throw new Error(
    `Не удалось выполнить запрос ${url}, попыток: ${retryCount + 1}`,
  );
};

retrier("https://some.api", 3)
  .then((response) => console.log("Успешно", response.status))
  .catch((error) => console.log(error.message));
```

- Неудачей считается и сетевая ошибка (`fetch` выбрасывает исключение), и ответ с ошибочным статусом (`response.ok === false`)
- `retrier(url, 3)` делает до 4 запросов: первый и 3 повтора
