# Всплытие

## Информация

::: info

- https://dev.to/lydiahallie/javascript-visualized-hoisting-478h - JavaScript Visualized: Hoisting

:::

::: tip Определение

- **Hoisting** - поднятие (всплытие), которое совершает переменная
- **Temporal Dead Zone** (временная мертвая зона) - время между созданием переменной scope и инициализацией

:::

**Двухпроходной анализатор**

- 1 проход - лексический анализ кода (декларирование всех переменных)
- 2 проход - исполнение кода

## Варианты

### `var`

- _Всплытие_: инициализация значением `undefined`
- _Выполнение_: инициализация присвоенным значением
- _При обращении до объявления_\*\*: `undefined`
- Функциональная область видимости

### `let` и `const`

- _Всплытие_: остаются неинициализированными, попадают в _Temporal Dead Zone_
- _Выполнение_: инициализация только в момент выполнения выражений `let/const/class`
- _При обращении до объявления_: ошибка "Uncaught ReferenceError: Cannot access 'foo' before initialization"
- Блочная область видимости

### `function foo() {}`

- _Всплытие_: инициализация функцией целиком (объявление вместе с телом)
- _Выполнение_: объявление пропускается, функция уже инициализирована
- _При обращении до объявления_: вызывается функция
- Функция имеет безусловный приоритет
- _LexicalEnvironment_ создает запись о том, что _"foo"_ переменная, если _"foo"_ не равно функции. Если _"foo"_ равно функции, остальные _"var/let/const foo"_ игнорируются, при условии что они не инициализированы значением

```js
// Переменная "var a" не проинициализирована
function a() {
  return true;
}
var a;
console.log(a); // => ƒ a() { return true }

// Переменная "var a" проинициализирована
function a() {
  return true;
}
var a = "Hello";
console.log(a); // => "Hello"
```

### Без объявления

- Записывается в глобальный объект `window` при нестрогом режиме

<!-- prettier-ignore -->
```js
// true
a = true;
console.log(a);

// Uncaught ReferenceError: "a" is not defined
"use strict";
a = true;
console.log(a);

// Uncaught ReferenceError: "a" is not defined
console.log(a);
a = true;
```

### `import`

- К началу выполнения модуля все его зависимости должны быть загружены и выполнены
- Поэтому, неважно место где указан _import_. Важно, чтобы не было объявлено одноименных переменных на уровне _import_
- Ошибка будет выведена до исполнения модуля, следовательно не будет выполнен не только код текущего модуля, но также не будут выполнены его зависимости

```js
console.log(a); // Неважно как объявлена "a" в модуле var/let/const
import a from "a"; // OK

var a = 10; // var/let/const - одинаковое поведение
import a from "a"; // Uncaught SyntaxError: Identifier 'a' has already been declared

import a from "a"; // Uncaught SyntaxError: Identifier 'a' has already been declared
var a = 10; // var/let/const - одинаковое поведение
```
