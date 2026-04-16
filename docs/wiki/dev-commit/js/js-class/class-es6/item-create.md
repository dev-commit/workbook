# Создание класса

- constructor() - метод, который вызывается в момент создания объекта (при использовании new). Он создает и инициализирует свойства
- В классе может быть только 1 конструктор. Если не указать конструктор, то JS создаст пустой конструктор

```js
class Task {
	constructor(name = 'Default') {
		this.title = 'MyTask';
		this.name = name;
		console.log('Create task');
	}
	complete() {
		return this.title;
	}
}

// Создание экземпляра класса (объекта)
const task = new Task('New Task');

// Обращение к свойствам
const title = task.title; // => "MyTask"
const name  = task.name;  // => "New Task" если передали в constructor

// Обращение к методам
const complete = task.complete(); // => MyTask

// Является ли объект представителем класса
const flag = task instanceof Task; // => true
```

```js
// Переопределение стандартных методов
Task.prototype.toString = function() {
	return this.name;
}
```
