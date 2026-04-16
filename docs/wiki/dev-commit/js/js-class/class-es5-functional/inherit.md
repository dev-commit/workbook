# Наследование

### Без аргументов

```js
// Admin вызывает функцию User, передавая ей в качестве контекста this текущий объект
// User, в процессе выполнения, записывает в this свойства и методы, в данном случае this.name
function User() {
    this.name = 'Tony';
}
function Admin() {
    User.call(this);
    this.id = 77;
}

const admin = new Admin(); // => Admin {name: "Tony", id: 77}
```

### Передача аргументов

```js
function User(id, name) {
	this.id = id;
	this.name = name;
}
function Admin() {
	User.apply(this, arguments);
}

const admin = new Admin(77, 'Tony'); // => Admin {id: 77, name: "Tony"}
```

### Переопределение наследованных методов

```js
function User() {
    this.name = 'Tony';
    this.getName = function() {
        console.log(this.name);
    }
}
function Admin() {
    User.call(this);
    const parentFunc = this.getName;
    this.getName = function() {
        parentFunc.call(this); // то что было в this.getName
        console.log('Jack');   // добавлено в метод getName
    }
}

const admin = new Admin();
admin.getName(); // => 'Tony', 'Jack'
```
