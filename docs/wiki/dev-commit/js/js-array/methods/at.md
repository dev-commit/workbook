# Array.prototype.at()

::: info
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/at
:::

```js
const arr = ['apple', 'banana', 'orange'];

// Выборка с начала массива
const a1 = arr.at(0); // => "apple" (первый элемент)
const a2 = arr.at(1); // => "banana"
const a3 = arr.at(2); // => "orange"
const a4 = arr.at(3); // => undefined

// Выборка с конца массива
const a5 = arr.at(-1); // => "orange" (последний элемент)
const a6 = arr.at(-2); // => "banana"
const a7 = arr.at(-3); // => "apple"
const a8 = arr.at(-4); // => undefined
```
