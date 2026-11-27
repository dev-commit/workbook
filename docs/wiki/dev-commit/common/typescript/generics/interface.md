# Использование дженерика в `interface`

```tsx
interface IApp<T> {
  name: T;
}

const foo = <T,>(data: IApp<T>): void => {
  //
};

foo({
  // Поле можно передать любого типа, т.к. передается в interface
  // name: "Tom",
  // Так тоже корректно
  name: 32,
});
```
