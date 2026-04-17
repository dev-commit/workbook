# Omit

- **Omit** - вспомогательный тип Omit позволяет создавать новые типы на основе существующих методом исключения некоторых свойств из исходного типа

## Определение типа

```js
Omit<Type, Keys>
```

## Примеры

```js
// тип
type Person = {
    name: string;
    age: number;
    address: string;
};

// создаем новый тип без свойства "address"
type NewPerson = Omit<Person, "address">;

// равносильно
type NewPerson = {
	name: string;
	age: number;
}

// использование
const person: NewPerson = {
    name: 'Tony',
    age: 23
}
```

```js
// исключение нескольких значений
type NewPerson = Omit<Person, "address" | "age">;
```
