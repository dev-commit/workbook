# Свойство constructor

### Свойство constructor по умолчанию

```js
// у каждой функции по умолчанию есть свойство prototype, содержащее объект
function MyFunc() {}
MyFunc.prototype = { 
	constructor: MyFunc 
};
const a = new MyFunc(); // => MyFunc {} __proto__: constructor: ƒ MyFunc()
```

### Перезапись свойства constructor

```js
function MyFunc() {}
MyFunc.prototype = { 
	jumps: true 
};
const a = new MyFunc(); // => MyFunc {} __proto__: jumps: true
```

### Создание объекта с тем же конструктором, что и данный

```js
function User(name) {
    this.name = name;
    console.log(name);
}
const user1 = new User('Tony');
const user2 = new user1.constructor('Jack');
```
