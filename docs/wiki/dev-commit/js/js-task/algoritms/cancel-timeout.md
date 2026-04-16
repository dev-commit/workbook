# 👿 Написать функцию, которая отменяет все таймауты которые есть

```js
const mySetTimeout = setTimeout;
const timeoutIds = [];

setTimeout = function(cb, ms, ...arg) {
	const timerId = mySetTimeout(cb, ms, ...arg);
	timeoutIds.push(timerId);
	return timerId;
}

function clearAllTimeouts() {
	timeoutIds.forEach(id => {
		clearTimeout(id);
	})
}
clearAllTimeouts();
```

### Вариант с callback

```js
const mySetTimeout = setTimeout;
const timeoutIds = new Set();

setTimeout = function(cb, ms, ...arg) {
	const timerId;
	const callback = function() {
		cb(...arg);
		timeoutIds.delete(timerId);
	}
	
	timerId = mySetTimeout(callback, ms);
	timeoutIds.add(timeoutIds);

	return timerId;
}
```
