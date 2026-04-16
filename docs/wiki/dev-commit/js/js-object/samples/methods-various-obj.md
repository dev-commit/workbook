# Метод для разных объектов

```js
const speak = function() {
	console.log(this.sound, this.name);
}
```

```js
const animal = {
	sound: 'Mrr',
	name: 'Cat',
	speak: speak
}

animal.speak(); // Mrr, Cat
```
