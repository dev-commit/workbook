# Object.setPrototypeOf

## Информация

::: danger

**`Object.setPrototypeOf(obj, prototype)`** - устанавливает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта в другой объект после создания объекта или null. Устанавливает `obj.__proto__ = prototype`

> - `obj` - объект, которому устанавливается прототип
> - `prototype` - новый прототип объекта (объект или null)

:::

```js
const dict = Object.setPrototypeOf({}, null);
```

- Плохо сказывается на производительности

## Примеры

```js
const animal = {
  say() {
    console.log(this.name);
  },
};
const cat = {
  name: "cat",
};
Object.setPrototypeOf(cat, animal);
cat.say(); // => "cat"
```
