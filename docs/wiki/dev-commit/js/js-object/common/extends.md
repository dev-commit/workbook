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

```js
// Запрещает добавление свойств в объект (применяется только к самому объекту)
Object.preventExtensions(person);
// Проверяет применение preventExtensions
const a = Object.isExtensible(person);
```

```js
// Аналогичен preventExtensions, дополнительно задает атрибут configurable:false для всех свойств
Object.seal(person);
// Проверяет применение seal
const a = Object.isSealed(person);
```

```js
// Аналогичен seal, дополнительно делает все свойства доступными только для чтения (configurable:false, writable:false)
Object.freeze(person);
// Проверяет применение freeze
const a = Object.isFrozen(person);
```
