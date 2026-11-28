# `require`, `module.exports`

## Импорт

```js
const data = require("./data");

const a = data.a;
const b = data.b;
```

## Экспорт

### Экспорт одного значения

<v-two :title="['Переменная', 'Функция']">
<template #first>

```js
// export
const text = "Hello";
module.exports = text;

// import
const text = require("./data");
```

</template>
<template #last>

```js
// export
const foo = () => console.log("Hello");
module.exports = foo;

// import
const foo = require("./data");
```

</template>
</v-two>

### Экспорт нескольких значений

**Пример 1**

```js
const a = "Hello";
const b = "World";

module.exports.a = a;
module.exports.b = b;
```

**Пример 2**

```js
module.exports.a = "Hello";
module.exports.b = "World";
```

**Пример 3**

```js
const a = "Hello";
const b = "World";

module.exports = {
  a: a,
  b: b,
};
```
