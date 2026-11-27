# Function

## Информация

- Если функция ничего не принимает и не возвращает, то можно указать `VoidFunction` - это готовый тип из стандартной библиотеки TS (`lib.dom.d.ts`)
- `VoidFunction` - то же самое, что `() => void`
- Если же тип есть, то его нужно описывать

## 1. Функция НЕ возвращает значение

- `void` - функция ничего не вернет

```ts
const foo = (name: string): void => {
  //
};
```

## 2. Функция возвращает значение

```ts
// Возвращает number
const foo = (name: string): number => {
  return 1;
};
```

```ts
// Возвращает объект
type TReturn = {
  name: boolean;
};

export const foo = (): TReturn => {
  return {
    name: true,
  };
};
```

## Дополнительно

```ts
// Можно не использовать _params внутри foo()
const foo = (_params: string) => {
  //
};
```
