# for и setTimeout без let

```js
// простое решение 1
for (let i=0; i<10; i++) {
    setTimeout((function(i) {
        return function() {
            console.log(i);
        }
    })(i), i*1000);
}
```

```js
// простое решение 2
for (let i=0; i<10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    })(i)
}
```

```js
// умное решение
for (let i=0; i<10; i++) {
    setTimeout((function(i) {
        console.log(i);
    }).bind(null, i), i*1000);
}
```
