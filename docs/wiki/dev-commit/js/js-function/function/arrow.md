# Стрелочные функции (ES6)

## Информация

::: info

- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions - MDN

:::

## Особенности

### 1. Контекст

- Стрелочная функция не имеет своего контекста _this_
- this берется из контекста (окружения) в котором функция объявлена в независимости от того где эта функция будет выполнена
- Нельзя использовать _.bind()_ _.call()_ _.apply()_, т.к. нельзя изменить _this_, который берется из контекста

<v-two :title="['arrow function', 'function']">
<template #first>

```js
const person = {
  name: "Tony",
  greet: () => {
    // this - объект из контекста window
    console.log("Hello" + this.name);
  },
};
person.greet();
```

</template>
<template #last>

```js
const person = {
  name: "Tony",
  greet: function () {
    // this - это person
    console.log("Hello" + this.name);
  },
};
person.greet();
```

</template>
</v-two>

### 2. Prototype

- Нет свойства _prototype_
- Нельзя использовать как конструкторы объектов (с _new_) и вызовут ошибку при использовании с new

### 3. Arguments

- Псевдомассив _arguments_ недоступен. Берется родительский arguments

### 4. Генераторы

- Ключевое слово _yield_ не может быть использовано в теле стрелочной функции
- Как следствие стрелочные функции не могут быть использованы как генераторы

## Варианты

### 2 аргумента

<v-two :title="['arrow function', 'function']">
<template #first>

```js
const add = (x, y) => x + y;
```

</template>
<template #last>

```js
function add(x, y) {
  return x + y;
}
```

</template>
</v-two>

### 1 аргумент

- Если функция принимает 1 параметр, не нужно заключать его в скобки

<v-two :title="['arrow function', 'function']">
<template #first>

<!-- prettier-ignore -->
```js
const square = x => x * x;
```

</template>
<template #last>

```js
const square = function (x) {
  return x * x;
};
```

</template>
</v-two>

### Без аргументов

<v-two :title="['arrow function', 'function']">
<template #first>

```js
const giveMeAnswer = () => 42;
```

</template>
<template #last>

```js
const giveMeAnswer = function () {
  return 42;
};
```

</template>
</v-two>

### Не возвращает значение

<v-two :title="['arrow function', 'function']">
<template #first>

```js
const log = () => console.log("hi");
```

</template>
<template #last>

```js
const log = function () {
  console.log("hi");
};
```

</template>
</v-two>

### Состоит из двух строк

- Если в стрелочной функции несколько строк, то используются фигурные скобки и `return`

<v-two :title="['arrow function', 'function']">
<template #first>

```js
const multiply = (x, y) => {
  const result = x * y;
  return result;
};
```

</template>
<template #last>

```js
const multiply = function (x, y) {
  const result = x * y;
  return result;
};
```

</template>
</v-two>

### Возвращает объект

- Возвращаемый объект оборачивается в круглые скобки

<v-two :title="['arrow function', 'function']">
<template #first>

```js
const getPerson = () => ({ name: "Jack" });
```

</template>
<template #last>

```js
const getPerson = function () {
  return { name: "Jack" };
};
```

</template>
</v-two>

### Самовызывающаяся функция (IIFE)

<v-two :title="['arrow function', 'function']">
<template #first>

```js
(() => console.log("IIFE"))();
```

</template>
<template #last>

```js
(function () {
  console.log("IIFE");
})();
```

</template>
</v-two>
