# Множественные проверки

<v-two compare :title="['Оптимально', 'Неоптимально']">
  <template #first>

```js
let vivas = {
  admin: "Admin",
  editor: "Editor",
  user: "User",
};

alert(`Hello ${user.group}`);
```

  </template>

<template #last>

```js
if (user.group === "admin") {
  alert("Hello Admin!");
} else if (user.group === "editor") {
  alert("Hello Editor!");
} else {
  alert("Hello Iser!");
}
```

  </template>
</v-two>
