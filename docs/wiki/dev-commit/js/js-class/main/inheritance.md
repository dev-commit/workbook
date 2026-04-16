# Наследование

## ES5

- **Класс** - функция-конструктор вместе с её prototype
- Класс - конструктор объектов

```js
function User(name) {
	this.name = name;
}
User.prototype.getName = function() {
	console.log(this.name);
}
```

```js
function Admin() {
	// Для наследования собственных свойств User()
	User.apply(this, arguments);
}

// В прототип Admin добавили всё из прототипа User
Admin.prototype = Object.create(User.prototype);
```

```js
const admin = new Admin('Tony');

admin.getName();    // => "Tony"
console.log(admin); // => Object { getName() {}, name: "Tony" }
```

## Установка прототипа

### 1. Object.create (верно)

```js
User.prototype = Object.create(Person.prototype);
```
- Object.create создает новый пустой объект, прототипом которого устанавливает ссылку на Person.prototype
- При вызове User через new, создастся новый объект и в свойство __proto__ установится ссылка на свой prototype

### 2. Простое присваивание прототипов (неверно)

```js
User.prototype = Person.prototype;
```
- Если добавлять методы в User.prototype, они попадут в Person.prototype
- Перезатрется текущий прототип у User: в User.prototype будет пустой объект со свойством constructor, который ссылается на User. Если в коде могут быть добавлены методы, они перезатрутся

### 3. Через new (неверно)

```js
User.prototype = new Person;
```
- При вызове new получаем объект, наполненный свойствами с прототипом, но нужно получить пустой объект, чтобы не было свойств
- При new Person прилетит мусор в виде собственных свойств класса Person

## ES6-классы

- **Класс** - функция/шаблон, предназначенный для создания объектов и методов
- **Конструктор** - метод, который вызывается в момент создания объекта т.е. когда используется ключевое слово new он создает свойства и инициализирует, т.е. подготавливает объект к использованию

- Если у подкласса нет конструктора, он будет использовать конструктор родителя
- Если подклассу указать конструктор, то он должен вызывать в начале конструктор родительского класса super()
- Метод super() позволяет наследовать свойства и методы из прототипа

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
