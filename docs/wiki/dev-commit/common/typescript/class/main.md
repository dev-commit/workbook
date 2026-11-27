# Class

```ts
class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}
```

## Аналогичные записи

<v-two :title="['Короткий вариант', 'Длинный вариант']">
<template #first>

```ts
class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}
```

</template>
<template #last>

```ts
class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}
```

</template>
</v-two>
