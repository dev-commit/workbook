# Iterator (Итератор)

## Информация

::: tip

:::

- Iterator - возможность последовательно обходить элементы составных объектов не раскрывая их внутреннего представления
- Предоставление инструмента доступа к объектам без возможности повлиять на объекты
- Создается класс, у которого можно последовательно получить доступ до определенной информации
- Задача: перебрать коллекцию. Коллекция - совокупность объектов, объединенных по определенным критериям
- Идея: вынести алгоритм обхода коллекции из самой коллекции в отдельный класс, который содержит методы next и hasNext

#### Методы

- next() - перемещение на следующий элемент коллекции
- hasNext - проверка существования следующего элемента. Если возвращает false, то перебор завершен

## Примеры

### Iterator

- ArrayIterator

```js
class ArrayIterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }
  next() {
    return this.elements[this.index++];
  }
  hasNext() {
    return this.index < this.elements.length;
  }
}
```

```js
const items = ["Audi", "BMW", "Tesla"];

const collection = new ArrayIterator(items);

while (collection.hasNext()) {
  const a = collection.next();
  console.log(a);
}
```

```bash
Output:
"Audi",
"BMW",
"Tesla"
```

---

- ObjectIterator

```js
class ObjectIterator {
  constructor(el) {
    this.index = 0;
    // Массив ключей объекта
    ((this.keys = Object.keys(el)), (this.elements = el));
  }
  next() {
    return this.elements[this.keys[this.index++]];
  }
  hasNext() {
    return this.index < this.keys.length;
  }
}
```

```js
const items = {
  audi: { model: "Audi", color: "black" },
  bmw: { model: "BMW", color: "green" },
  tesla: { model: "Tesla", color: "orange" },
};

const collection = new ObjectIterator(items);

while (collection.hasNext()) {
  const a = collection.next();
  console.log(a);
}
```

```bash
Output:
{ "model": "Audi", "color": "black" },
{ "model": "BMW", "color": "green" },
{ "model": "Tesla", "color": "orange" }
```

### Итератор через Symbol

```js
class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0,
          };
        }
      },
    };
  }
}

function* generator(collection) {
  let index = 0;

  while (index < collection.length) {
    yield collection[index++];
  }
}

const iterator = new MyIterator(["This", "is", "iterator"]);
const gen = generator(["This", "is", "iterator"]);

// for (const val of gen) {
//   console.log('Value: ', val);
// }

console.log(gen.next().value); // => "This"
console.log(gen.next().value); // => "is"
console.log(gen.next().value); // => "iterator"
```
