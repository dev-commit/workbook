# Наследование интерфейсов

## Наследование от одного интерфейса

<v-two :title="['TS', 'Usage']">
<template #first>

```ts
interface IAnimal {
  name: string;
}
interface ICat extends IAnimal {
  speed: number;
}
```

</template>
<template #last>

```ts
const a: ICat = {
  name: "Tom",
  speed: 10,
};
```

</template>
</v-two>

## Множественное наследование

<v-two :title="['TS', 'Usage']">
<template #first>

```ts
interface IAnimal {
  name: string;
}
interface IAction {
  go: () => void;
}
interface ICat extends IAnimal, IAction {
  speed: number;
}
```

</template>
<template #last>

```ts
const a: ICat = {
  name: "Cat",
  speed: 10,
  go: () => null,
};
```

</template>
</v-two>
