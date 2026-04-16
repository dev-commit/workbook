# Spread-оператор объектов

- Работает как Object.assign()

## Пример

```js
const defaults = {
	host: 'localhost',
	user: 'admin'
};

// более высокий приоритет
const options = {
	user: 'Tony',
	password: 'qwerty'
}
```

#### Spread

```js
const result ={ ...defaults, ...options };
```

#### Object.assign

```js
const result = Object.assign({}, defaults, options);
```

```js
// user из options перезапишет user из defaults
// =>
{
	host: 'localhost',
	user: 'Tony',
	password: 'qwerty'
}
```

```js
// комбинация свойств
const port = 8080;
const result = {
	...defaults,
	...options,
	port, 
	connect() {
		//
	}
};
```
