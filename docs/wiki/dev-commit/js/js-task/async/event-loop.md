# Event Loop

## _Async Await_ / _Promise_ / _setTimeout_

```js
setTimeout(() => console.log("setTimeout"), 0);

async function foo() {
  console.log("some");
  let data = await Promise.resolve(10); // => then(() => {})
  console.log(data);
}

foo();

console.log(20);

// some
// 20
// 10
// setTimeout
```

## _Promise_ / _setTimeout_

```js
function a() {
  console.log(1);
  Promise.resolve().then(a);
}

function b() {
  console.log(2);
  setTimeout(b);
}

b();
a();

// => 2 1 1 1 ... - 1 выводится бесконечно: очередь микрозадач
// не пустеет, и b из setTimeout больше не вызовется
```
