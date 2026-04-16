# Object.values()

- **Object.values()** - возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов

```js
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
```
