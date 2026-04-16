# Выражения классов

- Классы являются функциями, поэтому класс можно объявить двумя способами

### 1. Class Declaration

```js
class Task {
	constructor() {
		//
	}
}
```

### 2. Class Expression (выражение класса)

```js
const Task = class Task {
	constructor() {
		console.log('Create a task');
	}
}

const SubTask = class extends Task {
	constructor() {
		super();
		console.log('Create a subtask');
	}
}

const task = new Task();
const subtask = new SubTask();
```
