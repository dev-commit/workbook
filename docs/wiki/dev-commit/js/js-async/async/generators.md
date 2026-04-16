# Generators (ES6)

- Generators альтернатива Promise
- Generators - функции, которые могут останавливать свое выполнение, возвращать промежуточный результат и далее возобновлять выполнение позже в произвольный мемент времени

### Объявление генератора

```js
function* genetare()  {} 
function * genetare() {} 
function *genetare()  {} 

// анонимная функция
const generator = function*() {}

// метод у объекта
const obj = {
    *generator(start, end) {}
}

// метод у класса
class SomeClass {
    *generator(start, end) {}
}
```
- При вызове Генератора возвращается объект Итератор, позволяющий приостанавливать и возобновлять процесс выполнения функции
- yield - позволяет поставить выполнение функции на паузу и возобновить в произвольный момент
- yield - производит и отдает информацию - объек со свойствами value и done, но при этом также отдаем контроль за функцией
- yield 1 - возвращает промежуточный результат (value: 1)

### Использование с Fetch

```js
function getApi() {
	let response = yield fetch('url');
	let data = yield response.json();
	return data;
}
```

### Пример #1. Передать значение

```js
function* generate() {
    console.log('Start');
    yield 1;
    console.log('Finish');
}
const iterator = generate();
console.log(iterator.next()); // Object { value: undefined, done: false } Start
console.log(iterator.next()); // Object { value: undefined, done: true  } Finish
console.log(iterator.next()); // Object { value: undefined, done: true  }
```

### Пример #2. Получить значение

```js
function* generator() {
    const result = yield;
    console.log(result); // 1
}
const iterator = generator();
console.log(iterator.next());  // первый вызов запускает генератора, нельзя передать значение
console.log(iterator.next(1)); // передаваемое значение

iterator.return(); // остановить генератор
iterator.throw();  // остановить с ошибкой
```

### Пример #3. Генаратор

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
