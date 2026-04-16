# 👿 Series

### Постановка задачи

- 1 - массив функций (в функции определенный интерфейс: аргумент и колбэк)
- 2 - начальное значение
- 3 - финальный колбэк
- Должен вызваться foo - асинхронная функция, которая дергает слой колбэков, переданных вторым аргументом и после манипялции с аргументами возвращает новый результат

### Решение

```js
function foo(x, cb) {
	setTimeout(() => cb(x+1), 10);
}
function bar(x, cb) {
	setTimeout(() => cb(x*3), 10);
}
series([foo, bar], 4, (result) => {
	console.log(result);
	// (4 + 1) * 3
})
```

```js
async function series(funcs, x, cb) {
	for (let fun of funcs) {
		let promise = new Promise(resolve => fun(x, resolve));
		x = await promise;
	}
	cb(x);
};
```
