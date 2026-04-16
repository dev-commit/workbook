# Array.prototype.find()

- **find()** - возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined
- **findIndex** - возвращает индекс найденного в массиве элемента вместо его значения

```js
const arr = ['Jack', 'Kate', 'Tony'];

const result = arr.find((element) => {
	if (element === 'Tony') {
		return element;
	}
})

console.log(result); // => Tony
```

```js
const arr = ['Jack', 'Kate', 'Tony'];

const result = arr.findIndex((element) => {
	if (element === 'Tony') {
		return element;
	}
})

console.log(result); // => 2
```
