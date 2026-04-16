# Шаблонные строки (ES6)

## Использование

```js
const a = `
	первая строка
	вторая строка
`;
```

## Интерполяция

```js
const a = 'text'; 
const b = `строка текста ${a} строка текста`;
```

## Tagged Templates

- Тегирование - изменение вида шаблонов при помощи функций

```js
const name = 'Tony';
console.log(upperName`Hello ${name}`);

// literals - массив строковых литералов
// name - значение вычисленных выражений
function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}
```

```js
const template = (strings, ...values) => {
	console.log(strings);
	console.log(values);
};

const text = 'abc';
template `<div>${text}</div>`;
// => ["<div>", "</div>"]
// => ["abc"]
```
