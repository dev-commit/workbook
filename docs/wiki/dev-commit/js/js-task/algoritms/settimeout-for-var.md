# for и setTimeout без let

```js
// Простое решение 1
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

// Простое решение 2
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}

// Умное решение
for (var i = 0; i < 10; i++) {
  setTimeout(
    function (i) {
      console.log(i);
    }.bind(null, i),
    i * 1000,
  );
}
```
