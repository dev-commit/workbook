# Object.fromEntries()

- **Object.fromEntries()** - преобразует список пар ключ-значение в объект

### Преобразование Map в Object

```js
const map = new Map([
	['foo', 'bar'],
	['baz', 42]
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Преобразование Array в Object

```js
const arr = [
    ['0', 'a'],
    ['1', 'b'],
    ['2', 'c']
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Трансформации объектов

- С Object.fromEntries(), обратным ему методом Object.entries() и методами манипулирования массивами вы можете преобразовывать объекты следующим образом:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
    Object.entries(object1)
        .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```
