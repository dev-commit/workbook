# promise

<v-two :title="['Описание', 'Вызов']">
<template #first>

```ts
type Fields = {
  p1: Promise<void>;
  p2: Promise<string>;
  p3: Promise<boolean>;
  p4: Promise<never>;
};
```

</template>
<template #last>

```ts
const a: Fields = {
  p1: new Promise((resolve) => {
    console.log("Ok");
    resolve();
  }),
  p2: new Promise((resolve) => {
    resolve("Ok");
  }),
  p3: new Promise((resolve) => {
    resolve(true);
  }),
  p4: new Promise((resolve) => {
    throw new Error("Error");
  }),
};
```

</template>
</v-two>

## `Promise<void>`

- Асинхронная функция возвращает Promise, даже если нет return
- Если нет return, то будет `Promise<void>`

```ts
export const foo = async (): Promise<void> => {
  //
};
```
