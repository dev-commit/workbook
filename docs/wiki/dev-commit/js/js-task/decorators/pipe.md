# pipe

### Реализация из статьи

```js
function pipe(){
	const args = Array.from(arguments);
	const result = args.shift();

	while(args.length) {
		const f = args.shift();
		result = f(result);
	}
	return result;
}

pipe(
	textFromFile,
	trim,
	sanitize,
	parse,
	extractData,
	send
);
```

### Реализовать pipe (не доделано)

```js
reverse(get6Characters(uppercase(getName({ name: 'Buckethead' }))));

pipe(
	getName,
	uppercase,
	get6Characters,
	reverse
)({ name: 'Buckethead' });

function pipe(...func) {
	return function(obj) {
		return func.reduce((previousValue, currentValue) => currentValue(previousValue), obj)
	}
}
```
