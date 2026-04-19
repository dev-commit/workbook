# keyof

- **keyof** - проходится по интерфейсу и формирует новый тип из ключей интерфейса

```js
interface Foo {
	name: string
	age: number
}

type FooKeys =keyofFoo; // => 'name' | 'age'

const a: FooKeys = 'name';  // ✅ Correct
const b: FooKeys = 'count'; // 🅾️ Error: Нет такого поля в ключах Foo
```

## Примеры

- Нужно обратиться к ключу объекта, используя строку
- При обращении obj[field] возникает ошибка: "Type 'string' can't be used to index type 'IObj'"
- Причём obj['name'] работает корректно, т.к. нет конкретного указания, что 'name' строка

---
- При использовании строки как ключа, она должа быть типа ключей объекта
- Для этого можно использовать keyof

#### 

```js
interface IObj {
    name: string;
    age: number;
}

const field: string = 'name';

const obj: IObj = {
    name: '',
    age: 23
}

obj[field];  // 🅾️ Error
obj['name']; // ✅ Correct
```

#### 

```js
interface IObj {
    name: string;
    age: number;
}

const field:keyofIObj = 'name';

const obj: IObj = {
    name: '',
    age: 23
}

obj[field];  // ✅ Correct
obj['name']; // ✅ Correct
```
