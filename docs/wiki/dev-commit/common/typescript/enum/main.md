# Enum

## Информация

::: tip Определение

- **Enum** - предназначен для описания набора числовых или строковых значений с помощью именованных констант

:::

- Позволяет лучше структурировать код, если присутствуют однотипные элементы

## Без значения

```ts
enum Season {
  Winter, // 0
  Spring, // 1
  Summer, // 2
  Autumn, // 3
}

let a: Season = Season.Summer; // 2
let b: string = Season[2]; // "Summer"

// Изменение значения
a = Season.Autumn;
```

## Задание значения

```ts
enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM; // "INSTAGRAM"
```

## Использование как значение

- Enum можно удобнее использовать в типах как значение

```ts
enum E {
  A = "A",
  B = "B",
}
const O = {
  A: "A",
  B: "B",
} as const;

interface QWE {
  e: E;
  o: (typeof O)[keyof typeof O];
}
```

## Ограничения

<v-two :title="['Допустимо', 'Недопустимая вложенность']">
<template #first>

```ts
export enum FormFieldEnum {
  name = "name",
  age = "age",
}
```

</template>
<template #last>

```ts
export enum FormFieldEnum {
  filters = {
    age = "age"
  }
  name = "name"
}
```

</template>
</v-two>

### Пример

```ts
enum FormFieldEnum {
  filter = "filter",
  name = "name",
  age = "age",
}

const FormField = {
  [FormFieldEnum.filter]: {
    [FormFieldEnum.age]: "age",
  },
  [FormFieldEnum.name]: "name",
};
```
