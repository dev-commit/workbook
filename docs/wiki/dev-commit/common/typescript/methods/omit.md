# Omit

## Информация

::: tip Определение

- **Omit** - вспомогательный тип Omit позволяет создавать новые типы на основе существующих методом исключения некоторых свойств из исходного типа

:::

## Определение типа

<!-- prettier-ignore -->
```ts
Omit<Type, Keys>
```

## Примеры

```ts
// Тип
type Person = {
  name: string;
  age: number;
  address: string;
};

// Создаем новый тип без свойства "address"
type NewPerson = Omit<Person, "address">;

// Равносильно
type NewPerson = {
  name: string;
  age: number;
};

// Использование
const person: NewPerson = {
  name: "Tony",
  age: 23,
};

// Исключение нескольких значений
type NewPerson = Omit<Person, "address" | "age">;
```
