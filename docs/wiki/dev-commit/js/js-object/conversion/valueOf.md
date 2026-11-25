# Преобразование valueOf

## Информация

- Для **численного** преобразования используется метод _valueOf_, который может возвратить любое примитивное значение. У большинства объектов valueOf не работает (возвращает сам объект и потому игнорируется), при этом для численного преобразования используется toString

## Численное преобразование объекта

> Для численного преобразования объекта используется метод _valueOf_, а если его нет – то _toString_

```js
const room = {
  number: 777,
};

console.log(+room); // NaN
```

```js
const room = {
  number: 777,
  valueOf() {
    return this.number;
  },
  toString() {
    return this.number;
  },
};

console.log(+room); // 777, вызвался valueOf
delete room.valueOf; // valueOf удалён
console.log(+room); // 777, вызвался toString
```
