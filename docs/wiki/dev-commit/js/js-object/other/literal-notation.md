# Литеральная нотация

## Информация

```js
const property = "lastName"; // В константе находится название свойства
const nickname = "Sawyer"; // Константа совпадает с названием свойства

const person = {
  firstName: "Brad",
  [property]: "Stark",
  nickname,
  age: 25,
  children: ["Liza", "Petro"],
  address: {
    street: "555 Some st",
    city: "Boston",
    state: "MA",
  },
  getName() {
    return this.firstName;
  },
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  },
};
```

## Обращение к свойствам и методам

```js
const a = person.firstName; // Точечная нотация (Dot notation)
const a = person["firstName"]; // Скобочная нотация (Bracket notation)
const a = person.children[0]; // Обращение к свойству (массив)
const a = person.address.street; // Обращение к свойству (объект)
const a = person.getName(); // Обращение к методу
```

## Обновление и удаление свойства

- Через _delete_ можно удалить только ненаследованные свойства объекта, наследованные свойства удаляются у прототипа

```js
person.firstName = "Tony"; // Обновление свойства
person.height = 190; // Задание нового свойства
delete person.firstName; // Удаление свойства
```

## Добавление метода

```js
person.greet = function () {
  console.log("hi");
};
```

## Геттеры и сеттеры

```js
person.fullName = "Steve"; // Сеттер
const a = person.fullName; // Геттер (result = Steve Stark)
```
