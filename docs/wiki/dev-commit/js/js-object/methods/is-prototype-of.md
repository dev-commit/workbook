# isPrototypeOf

	проверяет, входит ли объект в цепочку прототипов другого объекта
    
объект, проверяемый на каждую ссылку в цепочке прототипов аргумента object
объект, в чьей цепочке прототипов производится поиск

- Отличие от instanceof: выражение object instanceof AFunction проверяет, присутствует ли в цепочке прототипов объекта object объект AFunction.prototype, а не сам объект AFunction

```js
// является ли объект ObjParent прототипом для объекта ObjChild
ObjChild.isPrototypeOf(ObjParent);
```
