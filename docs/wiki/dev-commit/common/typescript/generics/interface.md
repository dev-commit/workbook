# Использование Дженерика в interface

```js
interface IApp<T> {
  name: T;
}

const foo = <T,>(data: IApp<T>): void => {
    //
}

foo({
    // Поле можно пережать любого типа, т.к. передается в interface
    // name: 'Tom',
    // Так тоже корректно
    name: 32,
});
```
