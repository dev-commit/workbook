# Массивы

## map

```js
const tweeps = [
    { name: 'Peter', age: 20 },
    { name: 'Mary', age: 32 }
];

// написать функцию prop
const str = 'Mentioned by ' + tweeps.map(prop('name')).join(', '); // 'Mentioned by Peter, Mary'
const agesStr = `They are ${tweeps.map(prop('age')).join(',')}`    // 'They are 20, 32'

function prop(propName) {
    return function(obj) {
         return obj[propName];
    }
}
```

## Передача по ссылки и по значению

```js
let a = [1,2,3];
let b = a;

a[0] = 99;
console.log(b); // [99, 2, 3]

a = 4;
console.log(b); // [99, 2, 3]
```
