# Множественные проверки

<v-two :title="['Неоптимально', 'Оптимально']">
  <template #first>

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

<template #last>

```js
let vivas = {
  admin: "Admin",
  editor: "Editor",
  user: "User",
};

alert(`Hello ${user.group}`);
```

  </template>
</v-two>
