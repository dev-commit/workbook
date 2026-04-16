# Полифил bind()

- **bind** - создаёт новую функцию, которая при вызове устанавливает предоставленное значение в качестве контекста выполнения this. Возвращает «обёртку», которая передаст вызов в исходную функцию, с привязанным контекстом

## Исходный bind()

```js
function foo(a, b) {
	console.log(a, b, this.name);
}

const bar = foo.bind({ name: 'Tony' }, 2, 3);
const result = bar(2, 3); // => 2 3 "Tony"
```

## Полифил

```js
function bind(callback, context) {
    return function() {
        return callback.apply(context, arguments);
    }
}
```

```js
function foo(a, b) {
	console.log(a, b, this.name);
}

const bar = bind(foo, { name: 'Tony' });
const result = bar(2, 3); // => 2 3 "Tony"
```

## 👿 Усложненный вариант

```js
Function.prototype.bind = function (context) {
	const fun = this;
	const arg1 = Array.prototype.slice.call(arguments, 1);
	return function () {
		const arg2 = Array.prototype.slice.call(arguments);
		return fun.call(context, arg1.concat(arg2))
	}
}
```

```js
Function.prototype.bind = function (context) {
	const arg1 = Array.prototype.slice.call(arguments, 1);
	const fun = this;

	return function () {
		const arg2 = Array.prototype.slice.call(arguments);
		return fun.apply(context, arg1.concat(arg2))
	}
}
```
