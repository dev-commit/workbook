# Partial

## Информация

::: tip Определение

- **Partial** - создает тип со всеми свойствами _Type_, установленными как _optional_ (необязательное поле). Эта утилита вернет тип, представляющий все подмножества данного типа.

:::

## Определение типа

<!-- prettier-ignore -->
```ts
Partial<Type>
```

## Примеры

```ts
interface Foo {
  name: string;
  age: number;
}

type Bar = Partial<Foo>;

// 🅾️ Error: Требуется обязательное поле "age"
const obj1: Foo = {
  name: "Tony",
};

// ✅ Correct: Все поля необязательные
const obj2: Bar = {
  name: "Tony",
};
```
