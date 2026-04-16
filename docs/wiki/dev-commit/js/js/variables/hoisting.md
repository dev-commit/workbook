# Всплытие

::: info
https://dev.to/lydiahallie/javascript-visualized-hoisting-478h
:::
- 1 проход - лексический анализ кода (декларирование всех переменных)
- 2 проход - исполнение кода

---
- **Hoisting** - поднятие (всплытие), которое совершает переменная
- **Temporal Dead Zone** (временная мертвая зона) - время между созданием переменной scope и инициализацией

### var

- Всплытие: инициализация значением undefined
- Выполнение: инициализация присвоенным значением
- При обращении до объявления: undefined
- Функциональная область видимости

### let и const

- Всплытие: остаются неинициализированными, попадают в Temporal Dead Zone
- Выполнение: инициализация только в момент выполнения выражений let/const/class
- При обращении до объявления: ошибка "Uncaught ReferenceError: Cannot access 'foo' before initialization"
- Блочная область видимости

### function foo() {}

- Всплытие:
- Выполнение:
- При обращении до объявления: вызывается функция
- Функция имеет безусловный приоритет
- LexicalEnvironment создает запись о том, что "foo" переменная, если "foo" не равно функции. Если "foo" равно функции, остальные "var/let/const foo" игнорируются, при условии что они не инициализированы значением

```js
// Переменная "var a" непроинициализирована
function a() { return true }
var a;
console.log(a); //=> ƒ a() { return true }

// Переменная "var a" проинициализирована
function a() { return true }
var a = 'Hello';
console.log(a); // => "Hello"
```

### Без объявления

- Записывается в глобальный объект window при нестрогом режиме

```js
// true
a = true;
console.log(a);

// Uncaught ReferenceError: "a" is not defined
'use strict'
a = true;
console.log(a);

// Uncaught ReferenceError: "a" is not define
console.log(a);
a = true;
```

### import

- К началу выполнения модуля все его зависимости должны быть загружены и выполнены
- Поэтому, неважно место где указан import. Важно, чтобы не было объявлено одноименных переменных на уровне import
- Ошибка будет выведена до исполнения модуля, следовательно не будет выполнен не только код текущего модуля, но так же не будут выполнены его зависимости

```js
console.log(a);    // неважно как объявлена "a" в модуле var/let/const
import a from 'a'; // OK
```

```js
var a = 10;        // var/let/const - одинаковое поведение
import a from 'a'; // Uncaught SyntaxError: Identifier 'a' has already been declared
```

```js
import a from 'a'; // Uncaught SyntaxError: Identifier 'a' has already been declared
var a = 10;        // var/let/const - одинаковое поведение
```
