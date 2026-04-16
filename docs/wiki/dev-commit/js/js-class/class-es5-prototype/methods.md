# Добавление методов

### Добавление метода в прототип класса

```js
function User(name) {
	this.name = name;
	this.avatar = 'Photo';
}
User.prototype.deleteAvatar = function() {
	this.avatar = null;
}
const user = new User('Jack'); // => User {name: "Jack", avatar: "Photo", __proto__: deleteAvatar: ƒ () }
user.deleteAvatar();
console.log(user);           // => User {name: "Jack", avatar: null, __proto__: deleteAvatar: ƒ ()}
```

### Изменение встроенных прототипов

```js
Object.prototype.myFunc = function() {
    alert('myFunc');
}
let obj = {}
obj.myFunc(); // => 'myFunc'
```
