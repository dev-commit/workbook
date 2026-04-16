# Расширяемость объектов

- **Расширяемость объектов** - возможность добавления новых свойств

```js
const person = {
	name: 'Tony',
	age: 20
}
```

```js
// запрещает добавление свойств в объект (применяется только к самому объекту)
Object.preventExtensions(person);
// проверяет применение preventExtensions
const a = Object.isExtensible(person);
```

```js
// аналогичен preventExtensions, дополнительно задает атрибут configurable:false для всех свойств
Object.seal(person);
// проверяет применение seal
const a = Object.isSealed(person);
```

```js
// аналогичен seal, дополнительно делает все свойства доступные только для чтения (configurable:false, writable:false)
Object.freeze(person);
// проверяет применение freeze
const a = Object.isFrozen(person);
```
