# Compose

## Постановка задачи

- Написать функцию compose, которая принимает неограниченное кол-во функций и применяет эти функции в обратном порядке

## Решение

### Одно значение в возвращаемой функции

#### Результат выполнения

```js
const a1 = compose(mul(2), add(5), add(2))(3); // => 20
```

#### Решение

```js
const compose = (...rest) => {
	return (value) => {
		return rest.reduceRight((prevValue, currentValue) => {
			return currentValue(prevValue);
		}, value);
	}
}
```

#### Вспомогательные функции

```js
//addиmul- каррированные функции
const add = (count1) => {
	return (count2) => {
		return count1 + count2;
	}
}
const mul = (count1) => {
	return (count2) => {
		return count1 * count2;
	}
}
```

### Массив значений в возвращаемой функции

#### Результат выполнения

```js
// Равносильно: square(double(2))
const a1 = compose(square, double)(2); // => 16

// Равносильно: square(double(sum(3, 4)))
const a2 = compose(square, double, sum)(3, 4); // => 196
```

#### Решение

```js
const compose = (...rest) => {
	return (...values) => {
		return rest.reduceRight((prevValue, currentValue, index) => {
			// Дополнительная проверка
			if (index === rest.length - 1) {
				return currentValue(...prevValue); 
			}
			return currentValue(prevValue);
		}, values);
	}
}
```

#### Вспомогательные функции

```js
const square = (x) => x * x;
const double = (x) => x * 2;
const sum = (a, b) => a + b;
```
