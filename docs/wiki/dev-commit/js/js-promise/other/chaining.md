# «Чейнинг» (цепочки промисов)

- «Чейнинг» (chaining) - цепочки промисов. При чейнинге, то есть последовательных вызовах .then…then…then, в каждый следующий then переходит результат от предыдущего. Если очередной then вернул промис, то далее по цепочке будет передан не сам этот промис, а его результат.
- Если then возвращает промис, то до его выполнения может пройти некоторое время, оставшаяся часть цепочки будет ждать
- Общее правило: если внутри then стартует новый асинхронный процесс, то для того, чтобы оставшаяся часть цепочки выполнилась после его окончания, мы должны вернуть промис
- Каждая последующая функция будет вызвана, когда предыдущий промис «зарезолвится», и вызвана она будет с результатом работы предыдущего промиса

```js
function functionAsync1() {
	const promise = new Promise(function(resolve, reject) {
	    resolve('promise1');
	});
	return promise;
}
function functionAsync2() {
	const promise = new Promise(function(resolve, reject) {
	    resolve('promise2');
	});
	return promise;
}
functionAsync1()
    .then(res => console.log(res)) // promise1
    .then(functionAsync2)
    .then(res => console.log(res)) // promise2
```
