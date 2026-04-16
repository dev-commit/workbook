# 👿 Последовательные коллбэки (не сделано)

- Коллбэки должны выполняться последовательно
- 1. Промисификация функций
- 2. Перебор функций через reduce

```js
function foo(callback) {
    setTimeout(function() {
        callback('A');
    }, Math.random()*100);
}

function bar(callback) {
    setTimeout(function() {
        callback('B');
    }, Math.random()*100);
}

function baz(callback) {
    setTimeout(function() {
        callback('C');
    }, Math.random()*100);
}
```
