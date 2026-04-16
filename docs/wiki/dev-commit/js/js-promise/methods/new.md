# new Promise

### Promise

```js
let promise = new Promise((resolve, reject) => {
    if (...) {
    	// onResolved()
        resolve('ok');
    } else {
    	// onRejected()
        reject(new Error('Api error')); // аналогично с throw
        throw new Error('Api error');   // аналогично с reject
    }
});
```

```js
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
        console.error(error.message); 
    })
```

### Функция

```js
function asyncFunc() {
	let promise = new Promise((resolve, reject) => {
		//
	});
	return promise;
}
```

```js
asyncFunc()
    .then(result => { ... })
    .catch(result => { ... })
```
