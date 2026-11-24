# Расширяемость объектов

## Информация

::: tip Определение

- **Расширяемость объектов** - возможность добавления новых свойств

:::

```js
const person = {
  name: "Tony",
  age: 20,
};
```

## Методы

### `preventExtensions()`

- Запрещает добавление свойств в объект (применяется только к самому объекту)

```js
Object.preventExtensions(person);
// Проверяет применение метода
const a = Object.isExtensible(person);
```

### `seal()`

- Аналогичен preventExtensions, дополнительно задает атрибут configurable:false для всех свойств

```js
Object.seal(person);
// Проверяет применение метода
const a = Object.isSealed(person);
```

### `freeze()`

- Аналогичен seal, дополнительно делает все свойства доступными только для чтения (configurable:false, writable:false)

```js
Object.freeze(person);
// Проверяет применение метода
const a = Object.isFrozen(person);
```
