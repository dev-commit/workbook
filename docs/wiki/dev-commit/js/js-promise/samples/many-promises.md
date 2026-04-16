# Несколько Promise

- Если несколько Promise, то .then будет выполняться последовательно для каждого

```js
Promise.resolve()
    .then(() => console.log(1))  // "Первый"
    .then(() => console.log(2))  // "Третий"

Promise.resolve()
    .then(() => console.log(11)) // "Второй"
    .then(() => console.log(12)) // "Четвертый"
```
- При .catch аналогично

```js
Promise.resolve()
	.then(() => console.log(1))                          // "Первый"
	.then(() => { console.log(2); throw new Error(); })  // "Третий"
	.catch(() => console.log(3))                         // "Пятый"
	.then(() => console.log(4))                          // "Седьмой"

Promise.resolve()
	.then(() => console.log(11))                         // "Второй"
	.then(() => { console.log(12); throw new Error(); }) // "Четвертый"
	.catch(() => console.log(13))                        // "Шестой"
	.then(() => console.log(14))                         // "Восьмой"
```
