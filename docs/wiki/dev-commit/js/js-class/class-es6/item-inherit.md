# Наследование

- Если у подкласса нет конструктора, он будет использовать конструктор родителя
- Если подклассу указать конструктор, то он должен вызывать в начале конструктор родительского класса super()
- метод super() позволяет наследовать свойства и методы из прототипа
- super() должен вызываться первым объявлением this

## Простой пример

```js
class User {
	constructor(name) {
		this.name = name;
	}
	getName() {
		console.log(this.name);
	}
}

class Admin extends User {
	constructor(name) {
		super(name);
	}
}

const admin = new Admin('Tony');
admin.getName();    // => "Tony"
console.log(admin); // => Object { name: "Tony" }
```

## Усложненный пример

```js
// создание супер-класса
class Task {
	constructor(title, comment) {
		this._comment = comment; 
		this.title = title;
		this.done = false;
		Task.count += 1;
		console.log('create task');
	}
	get comment() {
		return this._comment;
	}
	set comment(value) {
		this._comment = value;
	}
	static getDefaultComment() {
		return 'Задача';
	}
	complete() {
		this.done = true;
		console.log(`Задача ${this.title} выполнена`);
	}
}
Task.count = 0; // общее кол-во задач
```

```js
// наследование между двумя классами
class SubTask extends Task {
	constructor(title, comment, parent) {
		super(title, comment); // использование конструктора из супер-класса
		super.complete();      // использование методов из супер-класса
		this.parent = parent;
		console.log('create subtask');
	}
	// переопределение родительского метода
	complete() {
		// this.done = true;
		// вызываем, если не сделали этого в конструкторе
		// можно обратиться к методу и получить значение при необходимости
		// super.complete();
		console.log(`Подзадача ${this.title} выполнена`);	
	}
}
```

```js
let task = new Task('Изучить JavaScript', 'Comment Task');
let subtask = new SubTask('Изучить ES6', 'Comment SubTask', task);

task.complete();
subtask.complete();

console.log(SubTask.getDefaultComment());
console.log(SubTask.count);
```
