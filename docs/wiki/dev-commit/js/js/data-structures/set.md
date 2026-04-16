# Коллекции Set и WeakSet (ES6)

- **Set** - множество, набор значений. Структура данных в которой хранятся уникальные значения
- Нет литеральной формы, создается с помощью конструктора
- Варианты использования: хранение css классов dom элементов
- Является итерируемой структурой данных, можно перебрать с помощью for..of
- Сохраняет порядок элементов в котором они были добавлены
- Могут храниться только объекты
- Нет свойство size
- Нет метода clear()
- Не является итерируемым
- Если на объект, который хранится в WeakSet, нет ни одной внешней ссылки, то сборщик мусора удалит этот объект

- Каждый раз получая значение, генерирует хэш-функцию. Если она не совпадает с существующей, то это уникальный элемент

## Объявление

```js
const set = new Set(); // Set(0) {}
```

```js
// для указания начального значения в конструкторе указывается перебираемый объект
const set = new Set(['button', 'active', 'small']); // Set(3) {"button", "active", "small"}
```

```js
// буква "t" хранится 1 раз, т.к. в set только уникальные значения
const set = new Set('button'); // Set(5) {"b", "u", "t", "o", "n"}
```

```js
// set из 1 элемента
const set = new Set(['button']); // Set(1) {"button"}
```

```js
// клонирование set
const set1 = new Set(['button']); // Set(1) {"button"}
const set2 = new Set(set1);       // Set(1) {"button"}
```

## Добавление нового элемента

```js
const set = new Set();
set.add('button');
set.add('active');
set.add('active');
// Set(2) {"button", "active"}

const set = new Set();
set
    .add('button')
    .add('active')
    .add('active');
```

## Методы

```js
const a = set.size;          // кол-во элементо в set
const a = set.has('button'); // проверка наличия значения
set.delete('active');        // удаление элемента 
set.clear();                 // очистка set
```

## Set и Объекты

```js
const set = new Set();
set.add({className: 'button'}); 
const a = set.has({className: 'button'}); // false
// в метод add отправляется ссылка на один объект
// в метод has отправляется ссылка на другой объект

const set = new Set();
const buttonRef = {className: 'button'};
set.add(buttonRef); 
const a = set.has(buttonRef); // true
```

## values, keys, entries

```js
// нет метода для получения доступа к конкретному элементу
// нет понятия как индекс, поэтому keys возвращает values
console.log(...set);           // button active
console.log([...set]);         // (2) ["button", "active"] // преобразование в массив
console.log(Array.from(set));  // (2) ["button", "active"] // преобразование в массив

console.log(set.values());     // SetIterator {"button", "active"}
console.log(...set.values());  // button active
console.log(...set.keys());    // button active
console.log(...set.entries()); // (2) ["button", "button"] (2) ["active", "active"]
```

### Деструктуризация

```js
const [element1, element2] = set; // получить первый и второй элемент set
```

## Перебор set

```js
for (let item of set) {
    console.log(item);
}
// button
// active
```

```js
set.forEach((item, item2, set) => console.log(item, item2, set));
// button button Set(2) {"button", "active"}
// active active Set(2) {"button", "active"}
```

## Операции над множествами

- Нет встроенных методов

```js
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);
```

### Объединение

<!-- <img class="center" height="100px" src="../@img/set1.png"/> -->

- Объединение множеств - множество, содержащее в себе все элементы исходных множеств

---

```js
// Set(5) {1, 2, 3, 4, 5}
const union = new Set([...a, ...b]);
```

### Пересечение

<!-- <img class="center" height="100px" src="../@img/set2.png"/> -->

- Пересечение множеств - множество, которому принадлежат элементы которые есть во всех исходных множествах

---

```js
// Set(1) {3}
const interseption = new Set([...a].filter(
    x => b.has(x)
))
```

### Разность

<!-- <img class="center" height="100px" src="../@img/set3.png"/> -->

- Разность множеств - множество в которое входят все элементы первого множества не входящие во второе множество

---

```js
// Set(2) {1, 2}
const difference = new Set([...a].filter(
    x => !b.has(x)
))
```
