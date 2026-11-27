# keyof

## Информация

::: tip Определение

- **keyof** - проходится по интерфейсу и формирует новый тип из ключей интерфейса

:::

```ts
interface Foo {
  name: string;
  age: number;
}

type FooKeys = keyof Foo; // => 'name' | 'age'

const a: FooKeys = "name"; // ✅ Correct
const b: FooKeys = "count"; // 🅾️ Error: Нет такого поля в ключах Foo
```

## Примеры

<v-two text>
<template #first>

- Нужно обратиться к ключу объекта, используя строку
- При обращении _obj[field]_ возникает ошибка: "Type 'string' can't be used to index type 'IObj'"
- Причём _obj['name']_ работает корректно, т.к. нет конкретного указания, что 'name' строка

</template>
<template #last>

- При использовании строки как ключа, она должна быть типа ключей объекта
- Для этого можно использовать _keyof_

</template>
</v-two>

<v-two>
<template #first>

```ts
interface IObj {
  name: string;
  age: number;
}

const field: string = "name";

const obj: IObj = {
  name: "",
  age: 23,
};

obj[field]; // 🅾️ Error
obj["name"]; // ✅ Correct
```

</template>
<template #last>

```ts
interface IObj {
  name: string;
  age: number;
}

const field: keyof IObj = "name";

const obj: IObj = {
  name: "",
  age: 23,
};

obj[field]; // ✅ Correct
obj["name"]; // ✅ Correct
```

</template>
</v-two>
