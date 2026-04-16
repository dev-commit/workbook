# Конструктор создания объекта

```js
const apple = new Object();
apple.color = 'green';
apple.shape = 'round';
apple.describe = function() {
	return 'An apple is ' + this.color;
}

const a = apple.color;
const a = apple.describe();
```
