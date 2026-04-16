# Функция, возвращающая объект

```js
function createCar(property, value) {
	return {
		[property]: value,
		['_' + property]: value,
		[property.toUpperCase()]: value,
		['get' + property]() {
			return this[property];
		}
	};
}
const a = createCar('vin', 1);
```
