# Spread-оператор массивов (ES6)

- Оператор разворота (spread оператор) - позволяет разворачить элементы массива для передачи в качестве аргументов функций или в элементы другого массива

## Массив

```js
const arr1 = ['Kate', 'Jack'];
const arr2 = ['Tony', 'Natasha'];
const result = [...arr1, 'Tom', ...arr2];
console.log(result); // => 'Kate', 'Jack', 'Tom', 'Tony', 'Natasha'
```

## Функция

```js
function add(x,y,z) {
	console.log(x + y + z);
}
const numbers = [1, 2, 3];
add(...numbers);
```

## Примеры

### Переопределение свойства у объекта

```js
const obj1 = {
    name: 'Jack',
    age: 25,
}
const obj2 = {
    ...obj1,
    age: 27
}
console.log(obj2); // => { age: 27, name: "Jack" }
```

### Нахождение максмального значения

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const maxValue = Math.max(...arr1, ...arr2);
console.log(maxValue); // => 6
```
