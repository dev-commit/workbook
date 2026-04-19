# array

- Массивы являются строго типизированными: если изначально массив содержит строки, то в будущем он сможет работать только со строками

#### Описание

```js
type Fields = {
    field1: Array<string>;    // массив строк (Дженерик)
    field2: string[];         // массив строк (аналогично)
    field3: number[];         // массив чисел
    field4: [string, number]; // кортеж из разных типов данных
};
```

#### Вызов

```js
const a: Fields = {
    field1: ['a', 'b'],
    field2: ['a', 'b'],
    field3: [1, 2],
    field4: ['Tony', 23],
}
```

## Примеры

```js
const list: number[] = [10, 20, 30];
const colors: string[] = ['red', 'green', 'blue'];

console.log(list[0]);
console.log(colors[1]);
```

### Массив объектов 1

```js
const a: Array<{ id: number, name: string }> = [];
const a: { id: number, name: string }[] = [];
```

### Массив объектов 2

```js
export interface A {
    items: B[];
}

export interface B {
    value: number;
    note: string;
}
```

```js
// Использование
const obj: A = {
    items: [
        { value: 1, note: '' },
        { value: 2, note: '' },
    ]
}
```

### `Применение типа Array<> (Дженерик)`

- Дженерик указывает из чего состоит данный объект

```js
const names: Array<string> = ['Tom', 'Bob', 'Alice'];
```
