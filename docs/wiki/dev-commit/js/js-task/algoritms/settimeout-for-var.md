# for и setTimeout без let

## Реализация

### Простое решение 1

```js
for (var i = 0; i < 10; i++) {
  setTimeout(
    (function (i) {
      return function () {
        console.log(i);
      };
    })(i),
    i * 1000,
  );
}
```

### Простое решение 2

```js
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}
```

### Умное решение

```js
for (var i = 0; i < 10; i++) {
  setTimeout(
    function (i) {
      console.log(i);
    }.bind(null, i),
    i * 1000,
  );
}
```
