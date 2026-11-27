# Pick

## Информация

::: tip Определение

- **Pick** - позволяет выбрать указанные поля

:::

## Определение типа

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

## Примеры

### Пример #1

```ts
type Dog = {
  id: number;
  name: string;
  weight: number;
  age: number;
};

// Взяли только "id" и "name"
type Doggy = Pick<Dog, "id" | "name">;

// Эквивалентно
// type Doggy = {
//   id: number;
//   name: string;
// }

const obj: Doggy = {
  id: 23,
  name: "Jack",
};
```
