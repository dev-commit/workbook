# Полифил Promise.all

## Реализация

#### Код

```js
const promiseAll = (promises) => {
	return new Promise(function (resolve, reject) {
		if (!Array.isArray(promises)) {
			return reject(new TypeError('Arguments must be an array'));
		}

		let results = [];
		let remaining = promises.length;

		// Обработчик успешного выполнения каждого промиса
		function handleResolve(index, value) {
			results[index] = value;
			remaining--;

			if (remaining === 0) {
				resolve(results);
			}
		}

		// Обработчик ошибки при выполнении промиса
		function handleReject(error) {
			reject(error);
		}

		// Итерируем по массиву промисов и добавляем обработчики
		promises.forEach((element, index) => {
			Promise.resolve(element)
				.then(handleResolve.bind(null, index))
				.catch(handleReject);
		})
	});
}
```

#### Использование

```js
const URL1 = 'https://jsonplaceholder.typicode.com/todos/1';
const URL2 = 'https://jsonplaceholder.typicode.com/todos/2';

const getResource = async (url) => {
	const res = await fetch(url);
	return await res.json();
}

const asyncFoo = async () => {
  const p1 = getResource(URL1);
  const p2 = getResource(URL2);
  const a = await promiseAll([p1, p2]);
	console.log(a);
}

asyncFoo();
```
