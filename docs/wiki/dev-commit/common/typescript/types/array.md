# array

## Информация

- Массивы являются строго типизированными: если изначально массив содержит строки, то в будущем он сможет работать только со строками

<v-two :title="['Описание', 'Вызов']">
<template #first>

```ts
type Fields = {
  field1: Array<string>; // Массив строк (Дженерик)
  field2: string[]; // Массив строк (аналогично)
  field3: number[]; // Массив чисел
  field4: [string, number]; // Кортеж из разных типов данных
};
```

</template>
<template #last>

```ts
const a: Fields = {
  field1: ["a", "b"],
  field2: ["a", "b"],
  field3: [1, 2],
  field4: ["Tony", 23],
};
```

</template>
</v-two>

## Примеры

```ts
const list: number[] = [10, 20, 30];
const colors: string[] = ["red", "green", "blue"];

console.log(list[0]);
console.log(colors[1]);
```

### Массив объектов 1

```ts
const a: Array<{ id: number; name: string }> = [];
const a: { id: number; name: string }[] = [];
```

### Массив объектов 2

```ts
export interface A {
  items: B[];
}

export interface B {
  value: number;
  note: string;
}

// Использование
const obj: A = {
  items: [
    { value: 1, note: "" },
    { value: 2, note: "" },
  ],
};
```

### Применение типа `Array<>` (Дженерик)

- Дженерик указывает, из чего состоит данный объект

```ts
const names: Array<string> = ["Tom", "Bob", "Alice"];
```
