# Promise.all / Promise.race

## Пример

```js
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

sleep(2000).then(() => console.log("After 2 sec"));
sleep(3000).then(() => console.log("After 3 sec"));
```

```js
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
});
```
