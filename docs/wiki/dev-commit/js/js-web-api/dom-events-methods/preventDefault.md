# preventDefault

	Отключение действия события по умолчанию

```js
element.onclick = function(event) {
	event.preventDefault();
	// аналогично preventDefault(), но дальнейший код не выполняется
	// return false;
};
```
