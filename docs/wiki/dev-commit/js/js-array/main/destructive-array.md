# Деструктивное присваивание массивов (ES6) - деструктуризация

```js
const languages = ['JavaScript', 'Python', 'Ruby'];
```

#### ES6

```js
const [js, py, rb] = languages;
```

#### ES5

```js
const js = languages[0];
const py = languages[1];
const rb = languages[2];
```

## Варианты

```js
const scores = [3, 4, 5];
const [low, , high] = scores;      // игнорирование значения
const [low, ...rest] = scores;     // преобразование в массив оставшихся значений
const [low, mid, high=5] = scores; // значение по умолчанию
```

### Значение из многомерного массива

```js
const scores = [3, 4, [5, 6]];
const [low, mid, [high, higher]] = scores;
```

### Как параметр функции

```js
function cumputeScore([low, mid]) {
	console.log(low, mid);
}
cumputeScore([3, 4]);
```

### Для возврата нескольких значений из функции

```js
function getScores() {
	return [3, 4, 5];
}

const [low, mid, high] = getScores();
```

### Комбинация деструктуризации объектов и массивов

```js
const shape = {
	type: 'element',
	coordinates: {
		start: [22, 77]
	}
}

const { coordinates: { start: [startX, startY] } } = shape;
console.log(startX, startY); // => 22, 77
```

## Примеры

### Быстрый обмен значений переменнных

```js
const yes = 'Yes';
const no = 'No';

[yes, no] = [no, yes];
```
