# typeof

### typeof - возвращает тип аргумента

```js
typeof 0            // "number"
typeof 'foo'        // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (*)
typeof {}           // "object"
typeof []           // "object"
typeof new Date     // "object"
typeof function(){} // "function" (*)
typeof NaN          // "number"
```

```js
const bar = function foo() {};
typeof foo(); // Uncaught ReferenceError: foo is not defined
typeof bar;   // => "function"
typeof bar()  // => "undefined"
```

```js
// проверка поддержки свойств
typeof addEventListener !== 'undefined'
```
