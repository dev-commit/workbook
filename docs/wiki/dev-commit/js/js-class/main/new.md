# Конструктор new

- new недоступно у стрелочной функции

## Полифил

```js
function Person(name) {
	this.name = name;
}

function Foo(Constructor, ...props) {
	// 1. Создаётся новый пустой объект через Object.create
	// Устанавливает __proto__ этому объекту в которое записывается ссылка изprototypeconst instance = Object.create(Constructor.prototype);

	// 2. Модифицируетсяthis(т.е. этот новый объект) и инициализируются методы и свойства
	// Применяет функцию-класс к нашему новосозданному объекту
	// instance.name = 'Tony';
	Constructor.apply(instance, props);

	// 3. Неявно возвращаетсяthisбез вызоваreturn// Если в return объект, то вернется он
	// return (typeof instance === 'object' && instance !== null) ? instance : {};
	return instance instanceof Object ? instance : {};
}

const foo = Foo(Person, 'Tony');
console.log(foo); // => Object { name: "Tony" }
```

## Использование new

```js
function Foo(name) {
	this.name = name;
}

const foo = new Foo('Tony');
console.log(foo); // => Object { name: "Tony" }
```
