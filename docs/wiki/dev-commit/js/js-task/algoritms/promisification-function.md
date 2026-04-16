# Промисификация функции

```js
const loadFile = (src, callback) => {
	try {
		callback(null, 'result')
	} catch (e) {
		callback(new Error(e))
	}
}

const loadFilePromise = (src) => {
	return new Promise((res, rej) => {
		loadFile(src, (err, result) => {
			if (err) rej(err)
			res(result)
		})
	})
}
```
