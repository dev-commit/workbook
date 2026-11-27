# Тип принимает аргумент

```ts
// AllowedValues строка

// Объект с ключом "name" и разрешенными значениями "T"
type FieldType<T = string> = {
  name: T;
};

// Разрешенные значения для ключа "name"
type AllowedValues = "name" | "age" | "count";

// Массив объектов
type MyFields = FieldType<AllowedValues>[];

// Результат: массив объектов с разрешенными значениями
const fields: MyFields = [
  { name: "name" },
  { name: "age" },
  // { name: 'date' }, // error
];
```

```ts
// AllowedValues объект

type AllowedValues = {
  id: string;
  name?: string;
};

const fields: MyFields = [
  {
    name: {
      id: "1",
      name: "Jack",
    },
  },
];
```
