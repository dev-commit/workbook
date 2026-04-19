# Partial

- **Partial** - создает тип со всеми свойствами Type, установленными как optional (необязательное поле). Эта утилита вернет тип, представляющий все подмножества данного типа.

## Определение типа

```js
Partial<Type>
```

## Примеры

```js
interface Foo {
    name: string;
    age: number;
}

type Bar =Partial<Foo>;

// 🅾️ Error: Требуется обязательное поле "age"
const obj1: Foo = {
    name: 'Tony',
}

// ✅ Correct: Все поля необязательные
const obj2: Bar = {
    name: 'Tony',
}
```
