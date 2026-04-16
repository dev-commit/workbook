# Проверка на "undefined"

```js
var a;

if (a === undefined) {
	console.log('Undefined');
} else {
	console.log('Not undefined');
}

if (typeof a == "undefined") {
	console.log('Undefined');
} else {
	console.log('Not undefined');
}

if (!!a) {
	console.log('Not undefined');
} else {
	console.log('Undefined');
}
```
- !! - является проверкой как определена ли переменная и является истиной
- !!! - как определена переменная и является ложью
- При этом если переменная является undefined, то всегда вернется false
