# Дженерик для объекта

## Использование `interface`

```ts
interface Admin<S> {
  role: string;
  user: S;
}

interface Person {
  name: string;
}

const user: Admin<Person> = {
  role: "admin",
  user: {
    name: "Jack",
  },
};
```

## Использование простого типа данных

```ts
interface Admin<S> {
  role: string;
  user: S;
}

const user: Admin<string> = {
  role: "admin",
  user: "Jack",
};
```
