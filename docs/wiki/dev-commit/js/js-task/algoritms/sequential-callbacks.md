# Последовательные коллбэки

::: warning

- Проверить код

:::

## Информация

- _Задача_: вызвать `foo`, `bar` и `baz` так, чтобы их коллбэки выполнились последовательно - A, B, C, несмотря на случайные задержки

```js
function foo(callback) {
  setTimeout(function () {
    callback("A");
  }, Math.random() * 100);
}

function bar(callback) {
  setTimeout(function () {
    callback("B");
  }, Math.random() * 100);
}

function baz(callback) {
  setTimeout(function () {
    callback("C");
  }, Math.random() * 100);
}
```

## Решение

1. Промисификация функций
2. Перебор функций через reduce

```js
// 1. Промисификация: функция с callback → функция, которая возвращает Promise
const promisify = (fn) => () => new Promise((resolve) => fn(resolve));

// 2. Перебор через reduce: каждая функция запускается после завершения предыдущей
[foo, bar, baz]
  .map(promisify)
  .reduce(
    (chain, fn) => chain.then(fn).then((result) => console.log(result)),
    Promise.resolve(),
  );

// A
// B
// C
```

- Если вызвать функции сразу одну за другой, коллбэки сработают в случайном порядке: у каждой своя случайная задержка
- `reduce` собирает цепочку `Promise.resolve().then(foo).then(log).then(bar).then(log)…`: следующая функция запускается только после того, как предыдущая вызвала свой коллбэк
