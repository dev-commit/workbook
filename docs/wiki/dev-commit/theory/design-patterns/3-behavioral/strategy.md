# Strategy (Стратегия)

## Информация

::: tip Определение

- **Strategy** - взаимодействие с разыными стратегиями через один интерфейс
- Позволяет создавать оболочку для различных интерфейсов для возможности использования разных алгоритмов и интерфейсов в задаче
- Определяет семейство алгоритмов, которые наследуют объекты в неизменяемом порядке
  :::

## Примеры

### Стратегия поездки

```js
class Vehicle {
  travelTime() {
    return this.timeTaken;
  }
}

// Первая стратегия
class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

// Вторая стратегия
class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

// Третья стратегия
class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}

// Время на дорогу
class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

const commute = new Commute();

console.log(commute.travel(new Taxi())); // => 5
console.log(commute.travel(new Bus())); // => 10
console.log(commute.travel(new Car())); // => 3
```
