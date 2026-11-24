# Создание прототипа

## Информация

### Прототип

- У каждого _объекта_ есть _прототип_, от которого он наследует _свойства_ и _методы_. Если объект не включает в себя запрошенное свойство, JavaScript выполнит поиск этого свойства в прототипе объекта. При этом поиск будет выполняться по _цепочке прототипов_ до тех пор, пока не будет найдено то, что нужно. Если же поиск успехом не увенчается, будет возвращено _undefined_

```js
// Прототип
const Human = {
  type: "Human",
  head: 1,
  legs: 2,
};
// Объект с прототипом Human
const Megahuman = Object.create(Human);
```

```js
Megahuman.type; // Human
Megahuman.head; // 1

Megahuman.head = 2; // 2
Human.head; // 1
```

```js
Megahuman.hands = 10; // 10
Human.hands; // undefined

Human.face; // undefined
Megahuman.face; // undefined
```

```js
Human.face = "okay"; // okay
Megahuman.face; // okay

Megahuman.face = "awesome"; // awesome
Human.face; // okay
```

```js
Human.isPrototypeOf(Megahuman); // Является ли объект Human прототипом для объекта Megahuman
```

## Удаление свойств

```js
// Прототип
const Human = {
  type: "Human",
  head: 1,
  legs: 2,
};

// Объект с прототипом Human
const Megahuman = Object.create(Human);
Megahuman.head = 2; // 2
delete Megahuman.head;
Megahuman.head; // 1
```
