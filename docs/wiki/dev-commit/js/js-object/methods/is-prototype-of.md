# isPrototypeOf

## Информация

::: danger

**`prototypeObj.isPrototypeOf(object)`** - проверяет, входит ли объект в цепочку прототипов другого объекта

> - `prototypeObj` - объект, проверяемый на каждую ссылку в цепочке прототипов аргумента object
> - `object` - объект, в чьей цепочке прототипов производится поиск

:::

- Отличие от `instanceof`: выражение `object instanceof AFunction` проверяет, присутствует ли в цепочке прототипов объекта `object` объект `AFunction.prototype`, а не сам объект `AFunction`

```js
// Является ли объект ObjParent прототипом для объекта ObjChild
ObjParent.isPrototypeOf(ObjChild);
```
