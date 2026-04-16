# Объявление

```js
function User(name) {
	this.name = name;
	this.avatar = 'Photo';
	this.deleteAvatar = function() {
		this.avatar = null;
	}
}
const user = new User('Jack'); // => User {name: "Jack", avatar: "Photo", deleteAvatar: ƒ}
user.deleteAvatar();
console.log(user);           // => User {name: "Jack", avatar: null, deleteAvatar: ƒ}
```
