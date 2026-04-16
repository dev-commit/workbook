# Задание свойств объекта

```js
const text = 'Some text';
function getId() {
	return 7;
}
let obj = {
	text,
	['prop_' + getId()]: 'some prop'
}
console.log(obj); // Object {text: 'Some text', prop_7: 'Some prop'}
```
