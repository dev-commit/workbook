# Преобразование valueOf

- Для численного преобразования используется метод valueOf, который может возвратить любое примитивное значение. У большинства объектов valueOf не работает (возвращает сам объект и потому игнорируется), при этом для численного преобразования используется toString

## Численное преобразование объекта

```js
const room = {
	number: 777,
};

alert( +room ); // NaN
```
- Для численного преобразования объекта используется метод valueOf, а если его нет – то toString

```js
const room = {
	number: 777,
	valueOf() { return this.number; },
	toString() { return this.number; }
};

alert( +room );      // 777, вызвался valueOf
delete room.valueOf; // valueOf удалён
alert( +room );      // 777, вызвался toString
```
