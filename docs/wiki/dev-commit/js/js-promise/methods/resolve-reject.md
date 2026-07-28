# Promise.resolve(value) и Promise.reject(error)

## Информация

::: danger

**`Promise.resolve(value)`** - создаёт успешно выполнившийся промис с результатом value. Используют, когда хотят построить асинхронную цепочку, и начальный результат уже есть

> - _return_ - value -> результат

:::

::: danger

**`Promise.reject(error)`** - создаёт уже выполнившийся промис с ошибкой error. Используется очень редко, т.к. ошибка возникает обычно не в начале цепочки, а в процессе её выполнения

> - _return_ - value -> ошибка

:::

## Примеры

```js
Promise.resolve(55).then((val) => console.log(val));
Promise.reject(new Error("...")).catch((val) => console.log(val));
```
