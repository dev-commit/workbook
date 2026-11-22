# toString vs valueOf

## Информация

<v-two>
<template #first>

- По умолчанию будет использоваться метод _valueOf_
- Если нет _valueOf_, то будет использоваться _toString_

```js
const user = {
  name: "Tony",
  age: 23,
  toString: function () {
    return this.name;
  },
  valueOf: function () {
    return this.age;
  },
};

console.log(user + 1); // => 24
console.log("Hello" + user); // => "Hello23"
```

</template>
<template #last>

- Собственная реализация метода _toString_
- Без реализации метода _valueOf_

```js
const user = {
  name: "Tony",
  age: 23,
  toString: function () {
    return this.name;
  },
  // valueOf: function () {
  //   return this.age;
  // },
};

console.log(user + 1); // => "Tony1"
console.log("Hello" + user); // => "HelloTony"
```

</template>
</v-two>

- Без реализации методов _toString_ и _valueOf_

```js
const user = {
  name: "Tony",
  age: 23,
};

console.log(user + 1); // => "[object Object]1"
console.log("Hello" + user); // => "Hello[object Object]"
```
