# Примеры

```js
// queue.waitForMessage ожидает события если очередь пуста
while(queue.waitForMessage()){ 
    queue.processNextMessage(); 
}
```

```js
// Рекурсивный вызов микротаска повесит программу
function startMicrotask() {
    return Promise.resolve().then(startMicrotask);
}
```

```js
console.log('Hi');
setTimeout(function cb1() { 
    console.log('cb1');
}, 5000);
console.log('Bye');
```

---

<!-- <img class="center" height="300px" src="../@img/event-loop2.gif"/> -->
