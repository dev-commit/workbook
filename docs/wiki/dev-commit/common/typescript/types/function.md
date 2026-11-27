# function

<v-two :title="['Описание', 'Вызов']">
<template #first>

```ts
type Fields = {
  onClick1: Function;
  onClick2: VoidFunction;
  onClick3: () => void;
  onClick4: (cn: string) => void;
  onClick5: (cn: string, isOpen?: boolean) => boolean;
};
```

</template>
<template #last>

```ts
const a: Fields = {
  onClick1: () => {},
  onClick2: () => {},
  onClick3: () => {},
  onClick4: (cn) => {},
  onClick5: (cn, isOpen) => {
    return true;
  },
};
```

</template>
</v-two>
