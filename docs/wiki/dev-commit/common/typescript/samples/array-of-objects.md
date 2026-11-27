# Массив объектов

```ts
// Объект с ключом "name"
type FieldType = {
  name: string;
};

// Массив, состоящий из FieldType
// Массив объектов
type MyFields1 = FieldType[];
// Массив объектов (аналогичная запись)
type MyFields2 = Array<FieldType>;

// Результат: массив объектов
const fields: MyFields2 = [{ name: "name" }, { name: "age" }];
```
