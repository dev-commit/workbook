# Шаблон

### 1. Структура файлов

```js
const sum = (a, b) => a + b;
module.exports = { sum };
```

```js
const { sum } = require('./intro');
```

### 2. Добавление Matchers

```js
test('Common Matchers', () => {
	expect(sum(1, 3)).toBe(4); // должно быть "4"
});

test('Numbers Matchers', () => {
	expect(sum(1, 3)).toBeGreaterThan(2); // должно быть больше чем "2"
});
```

### 3. Отрицание в Matchers

```js
test('Common Matchers', () => {
	expect(sum(1, 3)).not.toBe(5); // не должно быть "5" 
});
```

### 4. Объединение тест-кейсов

```js
describe('Sum function', () => {
	test('Common Matchers', () => {
		expect(sum(1, 3)).toBe(4);
	});

	test('Numbers Matchers', () => {
		expect(sum(1, 3)).toBeGreaterThan(2);
	});
});
```
