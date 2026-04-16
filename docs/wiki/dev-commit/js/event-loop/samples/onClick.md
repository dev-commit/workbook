# onClick

```html
<button id="root">start test</button>
```

```js
document.getElementById('root').addEventListener('click', onClick);

function onClick() {
	console.log('START');
	setTimeout(() => console.log('TIMEOUT'), 0);
	doHardWork();
	Promise.resolve().then(() => console.log('RESOLVE'))
	console.log('END');
}

// Имитируем тяжелые вычисления длительностью несколько секунд
function doHardWork() {
	for (let i = 0; i < 50000000; i++) {
		let number = Math.pow(number, i);
	}
}
```

```js
// 1. Нажали 3 раза на кнопку
// => START, END, RESOLVE
// => START, END, RESOLVE
// => START, END, RESOLVE
// => TIMEOUT, TIMEOUT, TIMEOUT
```
- onclick - асинхронная макротаска
- 3 раза кликнул, в очередь добавилось 3 onclick и они начинают по очереди входить в Call Stack
- setTimeout попадают в конец очереди

```js
// 2. В коде прописали 3 раза onClick()
onClick();
onClick();
onClick();

// => START, END
// => START, END
// => START, END
// => RESOLVE, RESOLVE, RESOLVE
// => TIMEOUT, TIMEOUT, TIMEOUT
```
- onClick() вызывается синхронно
