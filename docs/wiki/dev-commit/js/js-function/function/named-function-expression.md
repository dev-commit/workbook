# Named Function Expression

## Информация

::: tip Определение

- **Named Function Expression (NFE)** - именованные функциональные выражения

:::

- Имя NFE используется для единственной цели – позволить изнутри функции вызвать саму себя
- Если функция задана как Function Expression, ей можно дать имя
- Оно будет доступно только внутри функции
- Это имя предназначено для надёжного рекурсивного вызова функции, даже если она записана в другую переменную
- С Function Declaration так поступить нельзя
- NFE нельзя перезаписать

```js
const f = function sayHi(name) {
  alert(sayHi); // Изнутри функции - видно (выведет код функции)
};

alert(sayHi); // Снаружи - не видно (ошибка: undefined variable 'sayHi')
```

<v-two>
<template #first>

```js
function f(n) {
  return n ? n * f(n - 1) : 1;
}

const g = f;
f = null;

alert(g(5)); // Запуск функции с новым именем - ошибка при выполнении!
// Функция из своего кода обращается к своему старому имени f.
// Этой функции уже нет, f = null
```

</template>
<template #last>

```js
let f = function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
};

const g = f; // Скопировали ссылку на функцию-факториал в g
f = null;

alert(g(5)); // 120, работает!
```

</template>
</v-two>
