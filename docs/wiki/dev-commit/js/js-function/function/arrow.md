# Стрелочные функции (ES6)

::: info

:::

## Особенности

### 1. Контекст

- Стрелочная функция не имеет своего контекста this
- this берется из контекста (окружения) в котором функция объявлена в независимости от того где эта функция будет выполнена
- Нельзя использовать .bind() .call() .apply(), т.к. нельзя изменить this, который берется из контекста

#### arrow function

```js
const person = {
	name: 'Tony',
	greet: () => {
		// this - объект из контекста window
		console.log('Hello' + this.name);
	}
}
person.greet();
```

#### function

```js
const person = {
	name: 'Tony',
	greet: function() {
		// this - это person
		console.log('Hello' + this.name);
	}
}
person.greet();
```

### 2. Prototype

- Нет свойства prototype
- Нельзя использовать как конструкторы объектов (c new) и вызовут ошибку при использовании с new

### 3. Arguments

- Псевдомассив arguments недоступен. Берется родительский arguments

### 4. Генераторы

- Ключевое слово yield не может быть использовано в теле стрелочной функции
- Как следствие стрелочные функции не могут быть использованы как генераторы

---

## Варианты

### 2 аргумента

#### arrow function

```js
const add = (x, y) => x + y;
```

#### function

```js
function add(x, y) {
	return x + y;
}
```

### 1 агрумент

- Если функция принимает 1 параметр, не нужно заключать его в скобки

#### arrow function

```js
const square = x => x*x;
```

#### function

```js
const square = function(x) {
	return x*x;
}
```

### Без аргументов

#### arrow function

```js
const giveMeAnswer = () => 42;
```

#### function

```js
const giveMeAnswer = function() {
	return 42;
}
```

### Не возвращает значение

#### arrow function

```js
const log = () => console.log('hi');
```

#### function

```js
const log = function() {
	console.log('hi');
}
```

### Состоит из двух строк

- Если в стрелочной функции несколько строк, то используются фигурные скобки и return

#### arrow function

```js
const multiply = (x, y) => {
	const result = x*y;
	return result;
}
```

#### function

```js
const multiply = function(x, y) {
	const result = x*y;
	return result;
}
```

### Возвращает объект

- Возвращаемый объект оборачивается в круглые скобки

#### arrow function

```js
const getPerson = () => ({ name:'Jack' });
```

#### function

```js
const getPerson = function() {
	return { name:'Jack' }
}
```

### Самовызывающаяся функция (IIFE)

#### arrow function

```js
(() => console.log('IIFE'))();
```

#### function

```js
(function(){
	console.log('IIFE');
})();
```
