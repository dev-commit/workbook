# Особенности

### XML

- Язык со встроенной поддержкой XML, где <!-- - это комментарий

```js
const x = 1;
const y = 2;
const z = x<!--y;
console.log(z); // 1
```

### Метка

- a: 10 - это объявление метки
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/label

```js
; { var a = 1 }
; { a: 10 }
; { a = 3 }

console.log(a); // => 3
```
