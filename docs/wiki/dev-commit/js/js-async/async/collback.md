# Collback Function

- **Callback Function** - функция обратного вызова button.onclick = function() {}

```js
fade(this, 1000, function() {
	this.style.display = 'none';
})
function fade(element, time, callbackFunction) {
	// если callback не задан, создаем пустую функцию
	const callback = callbackFunction || function() {};
	// вызываем callback когда необходимо
	callback.call(element); // передать новый контекст this
}
```

```js
const greeting = function(callback) {
	const name = 'Tony';
	return callback(name);
}
const a = greeting(function(name) {
	return 'Hello ' + name;
});
```
