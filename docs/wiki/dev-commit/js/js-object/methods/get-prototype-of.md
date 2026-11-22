# Object.getPrototypeOf

## Информация

::: danger

**`Object.getPrototypeOf(obj)`** - возвращает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта. Возвращает `obj.__proto__`

> - `obj` - объект, чей прототип будет возвращён

:::

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```
