# toString vs valueOf

- По умолчанию будет использоваться метод valueOf
- Если нет valueOf, то будет использоваться toString

```js
const user = {
	name: 'Tony',
	age: 23,
	toString: function() {
		return this.name;
	},
	valueOf: function() {
		return this.age;
	},
};

console.log(user + 1);       // => 24
console.log('Hello' + user); // => "Hello23"
```

---
- Собственная реализация метода toString
- Без реализации метода valueOf

```js
const user = {
	name: 'Tony',
	age: 23,
	toString: function() {
		return this.name;
	},
	// valueOf: function() {
	// 	return this.age;
	// },
};

console.log(user + 1);       // => "Tony1"
console.log('Hello' + user); // => "HelloTony"
```
- Без реализации методов toString и valueOf

```js
const user = {
	name: 'Tony',
	age: 23,
};

console.log(user + 1);       // => "[object Object]1"
console.log('Hello' + user); // => "Hello[object Object]"
```
