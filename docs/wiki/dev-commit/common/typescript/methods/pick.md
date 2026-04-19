# Pick

- **Pick** - позволяет выбрать указанные поля

## Определение типа

```js
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}
```

## Примеры

### Пример #1

```js
type Dog = {
	id: number;
	name: string;
	weight: number;
	age: number;
}

// взяли только "id" и "name"
type Doggy = Pick<Dog, 'id' | 'name' >;

// эквивалентно
// type Doggy = {
//     id: number;
//     name: string;
// }

const obj: Doggy = {
    id: 23,
    name: 'Jack'
}
```
