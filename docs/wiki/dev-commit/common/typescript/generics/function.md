# Дженерик и стрелочная функция

## .TS файл

```ts
const foo2 = <T>(props: T): void => {
  //
};

function foo1<T>(props: T): void {
  //
}
```

## .TSX файл

::: info

- https://www.carlrippon.com/generic-arrow-functions/

:::

- В файлах .TSX есть особенность парсинга. Если указать дженерик для стрелочной функции, то будет ошибка

```tsx
// Не сработает в TSX файле
const foo = <T>(data: T) => {
  //
};

foo<SomeInterface>(data);
```

## Решение

### 1. Extends trick

```tsx
const foo = <T extends unknown>(data: T) => {
  //
};

const foo = <T extends any>(data: T) => {
  //
};
```

### 2. Comma trick

```tsx
const foo = <T,>(data: T) => {
  //
};
```

### 3. Just use a regular function

```tsx
function foo<T>(data: T) {
  //
}
```
