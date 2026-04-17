# Асинхронные тесты

```js
class Ajax {
	static echo(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject(new Error('error'));
				}
			}, 150)
		})
	}
}

module.exports = Ajax;
```

```js
const Ajax = require('./intro');

describe('Ajax: echo', () => {

	test('return value: async', async () => {
		const result = await Ajax.echo('some data');
		expect(result).toBe('some data');
	});

	test('return value: promise', () => {
		return Ajax.echo('some data')
			.then(data => {
				expect(data).toBe('some data')
			})
	});

	test('return error: promise', () => {
		return Ajax.echo()
			.catch(error => {
				expect(error).toBeInstanceOf(Error)
			})
	});

	test('return error: async', async () => {
		try {
			await Ajax.echo();
		} catch(e) {
			expect(e.message).toBe('error');
		}
	});
});
```
