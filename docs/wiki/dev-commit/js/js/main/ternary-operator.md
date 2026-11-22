# Тернарные операторы

## Информация

- `условие ? значение1 : значение2` - Если условие верно - значение1, иначе – значение2
- `условие1 && условие2` - Возвращает expr1, если может быть преобразовано в false; иначе возвращает expr2. Причем, при использовании с логическими значениями (boolean), && вернет true, если оба значения true; иначе вернет false

<v-two :title="['Тернарный оператор', 'if…else']">
<template #first>

```js
a = age > 14 ? true : false; // if-then-else
a = isAdmin ? "Admin" : "User"; // if-then-else
a = isAdmin ? "Admin" : null; // if-then
a = isAdmin && "Admin"; // if-then
```

</template>
<template #last>

```js
if (age > 14) {
  access = true;
} else {
  access = false;
}

if (isAdmin) {
  user = "Admin";
} else {
  user = "User";
}
```

</template>
</v-two>

<v-two :title="['Тернарный оператор', 'if…else']">
<template #first>

```js
const foo = () => {
  const a = true;

  return a ? "Yes" : "No";
};

const result = foo();
```

</template>
<template #last>

```js
const foo = () => {
  const a = true;

  if (a) {
    return "Yes";
  } else {
    return "No";
  }
};

const result = foo();
```

</template>
</v-two>

```js
// Если name === "Tony", вызываем getName()
name === "Tony" && getName();
```

- `a ? return 'Yes' : return 'No'` - return это не «выражение» (_expression_), а «инструкция» (_statement_), а в тернарном операторе должны быть выражения
