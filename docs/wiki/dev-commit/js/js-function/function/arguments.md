# Псевдомассив аргументов "arguments"

- Любая функция может быть вызвана с произвольным количеством аргументов
- Нет «перегрузки» функций, «полиморфизма функций»: объявление нескольких одинаковых функции с разными аргументами
- arguments - «псевдомассив» или «коллекция», т.е. объект, который похож на массив, в нём есть нумерованные свойства и length, но методов массива у него нет

```js
› arguments        // список аргументов по номерам (arguments[0], arguments[1])
› arguments.length // количество аргументов
```

```js
function greet() {
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}
greet('Tony', 'Jack', 'Anne');
```

## Аргументы по умолчанию через ||

```js
function showWarning(width, title) {
	width = width || 200; // если не указана width, то width = 200
	title = title || "Предупреждение";
}
```

```js
// при передаче width = 0 или width = null, оператор ИЛИ заменит его на значение по умолчанию
// оператор ИЛИ если нужно использовать значение по умолчанию только если width === undefined
```

## «Именованные аргументы» - объект в виде аргумента

```js
function showMessage(options) {
	const width = options.width || 200;
	const height = options.height || 100;
	const contents = options.contents || "Предупреждение";
}
```

```js
showMessage({
	contents: "Вы вызвали функцию"
});
```
