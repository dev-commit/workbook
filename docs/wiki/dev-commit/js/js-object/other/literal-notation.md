# Литеральная нотация

### Литеральная нотация

```js
const property = 'lastName'; // в константе находится название свойства
const nickname = 'Sawyer';   // константа совпадает с названием свойства

const person = {
	firstName: 'Brad',
	[property]: 'Stark',
	nickname,
	age: 25,
	children: ['Liza', 'Petro'],
	address: {
		street: '555 Some st',
		city: 'Boston',
		state: 'MA'
	},
	getName() {
		return this.firstName;
	}, 
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}, 
	set fullName(value) {
		this.firstName = value;
	}
}
```

### Обращение к свойствам и методам

```js
const a = person.firstName;      // точечная нотация (Dot notation)
const a = person['firstName'];   // скобочная нотация (Bracket notation)
const a = person.children[0];    // обращение к свойству (массив)
const a = person.address.street; // обращение к свойству (объект)
const a = person.getName();      // обращение к методу
```

### Обновление и удаление свойства

- Через delete можно удалить только ненаследованные свойства объекта, наследованные свойства удаляются у прототипа

```js
person.firstName = 'Tony';  // обновление свойства
person.height = 190;        // задание нового свойства
delete person.firstName;    // удаление свойства
```

### Добавление метода

```js
person.greet = function() {
	console.log('hi');
}
```

### Геттеры и сеттеры

```js
person.fullName = 'Steve';  // сеттер
const a = person.fullName;  // геттер (result = Steve Stark)
```
