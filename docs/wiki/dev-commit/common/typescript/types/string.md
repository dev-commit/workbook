# string

```ts
const str: string = "Hello";
```

<v-two :title="['Описание', 'Вызов']">
<template #first>

```ts
type Fields = {
  name1?: string; // Необязательное поле
  name2: string; // Строка
  name3: string[]; // Массив строк
  name4: string[] | undefined; // Массив строк или undefined
  name5: "Tony" | "Jack"; // "Tony" или "Jack"
};
```

</template>
<template #last>

```ts
const a: Fields = {
  // name1: "Tony",
  name2: "Tony",
  name3: ["Tony", "Jack"],
  name4: undefined,
  name5: "Tony",
};
```

</template>
</v-two>
