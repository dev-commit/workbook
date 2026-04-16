# Object.getPrototypeOf

    Возвращает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта.
	Возвращает obj.__proto__
    
Объект, чей прототип будет возвращён

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```
