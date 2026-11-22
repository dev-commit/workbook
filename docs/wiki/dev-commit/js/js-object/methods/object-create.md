# Object.create

## Информация

::: danger

**`Object.create(proto, descriptors)`** - добавление прототипа при создании объекта (создаёт пустой объект с `__proto__`, равным первому аргументу, второй содержит дескрипторы свойств)

> - `proto` - объект, который станет прототипом вновь созданного объекта (`__proto__`)
> - `descriptors` - дескрипторы свойств. Необязательный параметр. Если указан и не равен undefined, должен быть объектом, чьи собственные перечисляемые свойства (то есть такие, которые определены на самом объекте, а не унаследованы по цепочке прототипов) указывают дескрипторы свойств, добавляемых в новый объект. Имена добавляемых свойств совпадают с именами свойств в этом объекте. Эти свойства соответствуют второму аргументу метода Object.defineProperties()
> - _return_ - новый объект с заданным прототипом и свойствами

:::

```js
const obj = Object.create({ name: "Tony" });
// => {} => __proto__: name: "Tony"
```

## Задачи

<v-two>
<template #first>

```js
var obj = { name: "Tony" };
var objNew = Object.create(obj);

console.log(objNew.name); // "Tony"
delete objNew.name;
console.log(objNew.name); // "Tony"

delete obj.name;
console.log(objNew.name); // undefined
```

</template>
<template #last>

```js
// Структура objNew
objNew = {
  __proto__: {
    name: "Tony",
  },
};
```

</template>
</v-two>
