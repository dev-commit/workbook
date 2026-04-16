# Контекст

## Потеря контекста

### Постановка задачи

```js
const userService = {
	currentStatus: 'active',
	users: [
		{ name: 'A', status: 'active' },
		{ name: 'B', status: 'disabled' },
	],
	getFilteredUsers: function() {
		return this.users.filter(function (user) {
			return user.status === this.currentStatus;
		});
	},
};

console.log(userService.getFilteredUsers());
```

### Вывод консоли

1. Без 'use strict' => []
2. 'use strict' => Uncaught TypeError: Cannot read properties of undefined (reading 'currentStatus')

### Решение #1 - Стрелочная функция

```js
getFilteredUsers: function() {
	return this.users.filter((user) => {
		return user.status === this.currentStatus;
	});
},
```

### Решение #2 - call

```js
getFilteredUsers: function() {
	return this.users.filter(function(user) {
		return function (user) {
			return user.status === this.currentStatus;
		}.call(userService, user);
	});
},
```

### Решение #3 - Замыкание

```js
getFilteredUsers: function() {
	const localThis = this;
	return this.users.filter(function (user) {
		return user.status === localThis.currentStatus;
	});
},
```

## Вариации контекста

```js
function foo() {
	return function bar() {
		// когда bar вызывается, this указывает на объект { x: 10 }
		// стрелочная функция порождается когда bar был вызван в контексте объекта { x: 10 }
		// стрелка запоминает объект { x: 10 }
		return () => console.log(this);
	}
}

// если foo вызвана обычным способом, this ссылается на window или undefined в строгом режиме
function foo() {
	// если bar стрелка
	// стрелка создавалась в тот момент, когда у foo this == window, поэтому у стрелки тоже window
	return () => {
		// при создании стрелки у нее по замыканию this == window
		return () => console.log(this);
	}
}

const bar = foo().call();
bar.call({ y: 20 }); // call вызывает bar
```
