# Параллельное выполнение Promise.all и Promise.race

## Информация

::: danger

**`Promise.all([iterable]`** - выполнение нескольких промисов. Если какой-то из промисов завершился с ошибкой, то результатом Promise.all будет эта ошибка. При этом остальные промисы игнорируются

> - `iterable` - массив (или другой итерируемый объект) промисов
> - _return_ - новый промис, который ждёт, пока все переданные промисы завершатся, и переходит в состояние «выполнено» с массивом их результатов

:::

::: danger

**`Promise.race([iterable])`** - выполнение первого самого быстрого промиса. Результатом будет только первый успешно выполнившийся промис из списка. Остальные игнорируются

> - `iterable` - массив (или другой итерируемый объект) промисов, которые нужно выполнить
> - _return_ - первый промис из списка

:::

## Сравнение Promise.all и Promise.race

### Promise.all

<v-two>
<template #first>

- _Условие_: Все Promise выполнены успешно
- _Выдача_: Все Promise

```js
const p1 = getResource(URL1);
const p2 = getResource(URL2);

Promise.all([p1, p2])
  // Данные по "p1", "p2"
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));
```

</template>
<template #last>

- _Условие_: Хотя бы 1 Promise с ошибкой
- _Выдача_: Ошибка

```js
const p1 = getResource(URL2);
const p2 = getResource("https://НекорректныйАдрес");

Promise.all([p1, p2])
  .then((value) => console.log(value))
  // "Failed to fetch"
  .catch((error) => console.log(error.message));
```

</template>
</v-two>

### Promise.race

<v-two>
<template #first>

- _Условие_: Хотя бы 1 Promise без ошибки
- _Выдача_: Первый выполнившийся Promise без ошибки

```js
const p1 = getResource("https://НекорректныйАдрес");
const p2 = getResource(URL2);

Promise.race([p1, p2])
  // Данные по "p2"
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));
```

</template>
<template #last>

- _Условие_: Все Promise с ошибкой
- _Выдача_: Ошибка

```js
const p1 = getResource("https://НекорректныйАдрес");
const p2 = getResource("https://НекорректныйАдрес");

Promise.race([p1, p2])
  .then((value) => console.log(value))
  // "Failed to fetch"
  .catch((error) => console.log(error.message));
```

</template>
</v-two>

## Примеры

### Promise

**Вспомогательные данные**

```js
const getResource = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const URL1 = "https://jsonplaceholder.typicode.com/todos/1";
const URL2 = "https://jsonplaceholder.typicode.com/todos/2";
```

**Promise.all**

- `Promise.all` гарантирует порядок выполнения
- Если передали `[p1, p2, p3]`, то в ответе в массиве будет тот же порядок

```js
const asyncFoo = async () => {
  const p1 = getResource(URL1);
  const p2 = getResource(URL2);

  // res1 - данные по p1
  // res2 - данные по p2
  const [res1, res2] = await Promise.all([p1, p2]);
};

asyncFoo();
```

::: details Output

```js
res1 = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};
res2 = {
  userId: 1,
  id: 2,
  title: "quis ut nam facilis et officia qui",
  completed: false,
};
```

:::

### Пример с setTimeout

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise-1-2000"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise-2-1000"), 1000);
});

Promise.all([p1, p2]).then((value) => console.log(value));
// => ["promise-1-2000", "promise-2-1000"]

Promise.race([p1, p2]).then((value) => console.log(value));
// => "promise-2-1000"
```
