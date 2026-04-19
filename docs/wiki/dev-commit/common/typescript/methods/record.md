# Record

- **Record** - позволяет создать новый тип из объединения. Значения в объединении используются как атрибуты нового типа

## Определение типа

```js
type Record<K extends string, T> = {
    [P in K]: T;
}
```

## Примеры

### Пример #1

```js
type Dog = {
  id: number;
  name: string;
}

type Doggy = Record<'prop1' | 'prop2' | 'prop3', Dog>;

// эквивалентно
// type Doggy = {
//     prop1: Dog;
//     prop2: Dog;
//     prop3: Dog;
// }

const obj: Doggy = {
    prop1: {
        id: 23,
        name: 'Jack'
    },
    prop2: {
        id: 23,
        name: 'Jack'
    },
    prop3: {
        id: 23,
        name: 'Jack'
    }
}
```

### Пример #2

- Если я забуду кошку, то получу ошибку.
- Если я добавлю кошку, которая не разрешена, я получу ошибку.
- Если я позже изменю CatNames, я получу ошибку. Это особенно полезно, потому что CatNames, скорее всего, импортируется из другого файла и, вероятно, используется во многих местах.

```js
type CatNames = "miffy" | "boris" | "mordred";

type CatList = Record<CatNames, {age: number}>

const cats:CatList = {
    miffy: { age:99 },
    boris: { age:16 },
    mordred: { age:600 }
}
```
