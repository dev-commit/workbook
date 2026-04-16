# Лексическая и динамическая область видимости

- **Лексическая (статическая) область видимости** - при создании функции, она запоминает Lexical Environment в котором была СОЗДАНА
- Функция запоминает внешний Scope по месту создания, а не по месту вызова
- Используется в JavaScript
- **Динамическая область видимости** - при создании функции, она запоминает Lexical Environment в котором была ВЫЗВАНА

## Пример

- 20 берется по месту создания, а не по месту вызова функции
- Внутрення переменая bar - [[Evironment]] хранит ссылку на Lexical Environment foo, где существует локальная переменная a
- Функция создалась и ссылка закреплена за функцией
- Когда вызывается функция bar, создаеся Контекст исполнения (Execution Cintext), вместе с ним создается Lexical Environment и Environment Record
- У Environment Record есть свойство outer куда помещается ссылка bar.[[Evironment]]

```js
function foo() { // a
	const a = 20
	return function bar() { // bar.[[Evironment]] = LE foo
		console.log(a); // a 
	}
}

const a = 10
const bar = foo()
bar(); // EC - LE ER.outer - bar.[[Evironment]]

// => 20
```
