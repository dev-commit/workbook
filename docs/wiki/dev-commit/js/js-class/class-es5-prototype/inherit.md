# Наследование классов

## Пример наследования

### 1. Задание классов и прототипов

```js
function User() {
	this.userName = 'userName';
}
User.prototype.userFunc = function() {
	alert('userFunc');
}
User.prototype.userProp = 'userProp';
```

```js
function Admin() {
	this.adminName = 'adminName';
}
```

### 2. Наследование. В прототип Admin добавлили всё из прототипа User

```js
Admin.prototype = Object.create(User.prototype);
const admin = new Admin();
```

### 2. Наследование. Без добавления в прототип Admin (результат аналогичен)

```js
const admin = Object.setPrototypeOf(new Admin(), User.prototype);
```

### 3. Добавление методов к Admin.prototype (при необходимости)

```js
// добавлять после Admin.prototype = Object.create(User.prototype) чтобы не перетерло
Admin.prototype.adminFunc = function() {
	alert('adminFunc');
}
```

### 4. Переопределение метода родителя (при необходимости)

```js
Admin.prototype.userFunc = function() {
	alert('not userFunc');
}
```

### 5. Вызов метода родителя внутри своего (при необходимости)

```js
Admin.prototype.adminUserFunc = function() {
	// вызвать метод родителя передав ему текущие аргументы
	// если вызвать просто Animal.prototype.run(), то в качестве this функция run получит Animal.prototype, а это неверно, нужен текущий объект
	User.prototype.userFunc.apply(this, arguments);
}
```

### 6. Обращение к методам и свойствам

```js
admin.userFunc(); // => alert('userFunc')
admin.userProp;   // => 'userProp'
```

## Вызов конструктора родителя

```js
function Animal(name) {
    this.name = name;
    this.speed = 0;
}
function Rabbit(name) {
    Animal.apply(this, arguments);
}
```
