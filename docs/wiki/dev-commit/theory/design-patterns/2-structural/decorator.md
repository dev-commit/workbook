# Decorator (Декоратор)

## Информация

::: tip Определение

- **Decorator** - позволяет расширить функционал объектов без модификации существующих классов/функций-конструкторов
- Достигается путем оборачивания их в «обёртки» (декораторы)
- Декоратор получает объект, модифицирует и возвращает обратно
- Если декорируется функция, то декоратор - это функция высшего порядка, которая принимает в качестве аргумента функцию, модифицирует и возвращают ее
- _Задача_: уменьшение дочерних классов
- _Пример_: создание большого количества подклассов
  :::

## Варианты

<v-two :title="['Декоратор в виде Function', 'Декоратор в виде Class']">
  <template #first>

```js
class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const decorator = (user, age) => {
  // Добавление нового свойства
  user.age = age;
  // Добавление нового метода
  user.getAge = function () {
    return this.age;
  };
  // Модификация метода
  user.getName = function () {
    return this.name + " Decorator";
  };
  return user;
};

const data = decorator(new User("Jack"), 23);

const a1 = data.name; // => "Jack"
const a2 = data.age; // => 23
const a3 = data.getAge(); // => 23
const a4 = data.getName(); // => "Jack Decorator"
```

  </template>

<template #last>

```js
class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Decorator {
  constructor(user, age) {
    this.user = user;
    this.name = user.name;
    // Добавление нового свойства
    this.age = age;
  }
  // Добавление нового метода
  getAge() {
    return this.age;
  }
  // Модификация метода
  getName() {
    return this.user.getName() + " Decorator";
  }
}

const data = new Decorator(new User("Jack"), 23);

const a1 = data.name; // => "Jack"
const a2 = data.age; // => 23
const a3 = data.getAge(); // => 23
const a4 = data.getName(); // => "Jack Decorator"
```

</template>
</v-two>

## Примеры

::: details Установка сервера

```js
class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }
  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };
  return server;
}

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}

const s1 = aws(new Server("12.34.56.78", 8080));
console.log(s1.isAWS); // => true
console.log(s1.awsInfo()); // => "https://12.34.56.78:8080"

const s2 = azure(new Server("98.87.76.12", 1000));
console.log(s2.isAzure); // => true
console.log(s2.url); // => "https://98.87.76.12:1500"
```

:::

::: details Авто-дополнения

```js
class Car {
  constructor() {
    this.price = 10000;
    this.model = "Car";
  }
  getPrice() {
    return this.price;
  }
  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = "Tesla";
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 5000;
  }
  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

let tesla = new Tesla();
tesla = new Autopilot(tesla);

const a1 = tesla.getPrice(); // => 30000
const a2 = tesla.getDescription(); // => "Tesla with autopilot"
```

:::
