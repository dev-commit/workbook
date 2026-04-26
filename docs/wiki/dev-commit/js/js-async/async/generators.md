# Generators (ES6)

## Информация

::: tip Generators

- **Generators** - функции, которые могут останавливать свое выполнение, возвращать промежуточный результат и далее возобновлять выполнение позже в произвольный мемент времени
- Generators альтернатива Promise
  :::

## Использование

### Объявление генератора

```js
function* genetare() {}
function* genetare() {}
function* genetare() {}

// Анонимная функция
const generator = function* () {};

// Метод у объекта
const obj = {
  *generator(start, end) {},
};

// Метод у класса
class SomeClass {
  *generator(start, end) {}
}
```

### Принцип работы

- При вызове Генератора возвращается объект Итератор, позволяющий приостанавливать и возобновлять процесс выполнения функции
- `yield` - позволяет поставить выполнение функции на паузу и возобновить в произвольный момент
- `yield` - производит и отдает информацию - объек со свойствами value и done, но при этом также отдаем контроль за функцией
- `yield 1` - возвращает промежуточный результат (value: 1)

### Использование с Fetch

```js
function getApi() {
	let response = yield fetch('url');
	let data = yield response.json();
	return data;
}
```

## Примеры

### Пример 1. Передать значение

```js
function* generate() {
  console.log("Start");
  yield 1;
  console.log("Finish");
}
const iterator = generate();
console.log(iterator.next()); // Object { value: undefined, done: false } Start
console.log(iterator.next()); // Object { value: undefined, done: true  } Finish
console.log(iterator.next()); // Object { value: undefined, done: true  }
```

### Пример 2. Получить значение

```js
function* generator() {
  const result = yield;
  console.log(result); // 1
}
const iterator = generator();
console.log(iterator.next()); // Первый вызов запускает генератора, нельзя передать значение
console.log(iterator.next(1)); // Передаваемое значение

iterator.return(); // Остановить генератор
iterator.throw(); // Остановить с ошибкой
```

### Пример 3. Генаратор

```js
function* range(start, end) {
  let current = start;
  while (current <= end) {
    yield current++;
  }
}
for (let num of range(1, 10)) {
  console.log(num);
}
```
