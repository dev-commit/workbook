# Spread-оператор объектов

## Информация

- Работает как `Object.assign()`

## Пример

```js
const defaults = {
  host: "localhost",
  user: "admin",
};

// Более высокий приоритет
const options = {
  user: "Tony",
  password: "qwerty",
};
```

<v-two :title="['Spread', 'Object.assign']">
<template #first>

```js
const result = { ...defaults, ...options };
```

</template>
<template #last>

```js
const result = Object.assign({}, defaults, options);
```

</template>
</v-two>

```js
// Result
// user из options перезапишет user из defaults
// =>
{
  host: 'localhost',
  user: 'Tony',
  password: 'qwerty'
}
```

```js
// Комбинация свойств
const port = 8080;
const result = {
  ...defaults,
  ...options,
  port,
  connect() {
    //
  },
};
```
