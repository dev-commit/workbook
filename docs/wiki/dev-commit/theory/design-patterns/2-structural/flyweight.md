# Flyweight (Легковес)

## Информация

::: tip Flyweight

- **Flyweight** - позволяет эффективно передавать и работать с данными через различные типы объектов
- Загрузка изображений браузерами: использование паттерна, чтобы избежать повторной загрузки элементов, что уже были загружены
- К паттерну относятся понятия: кэширование, сохранение памяти и т.д.
  :::

## Примеры

### CarFactory

```js
class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  create(model, price) {
    const candidate = this.getCar(model);

    // Если в массиве cars есть данные, то берем из него, не создавая newCar
    if (candidate) {
      return candidate;
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);

    return newCar;
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model);
  }
}

const factory = new CarFactory();

const bmwX6 = factory.create("bmw", 10000); // => { "model": "bmw", "price": 10000 }
const audi = factory.create("audi", 12000); // => { "model": "audi", "price": 12000 }
const bmwX3 = factory.create("bmw", 8000); // => { "model": "bmw", "price": 10000 } (Берется из кеша)

console.log(bmwX3 === bmwX6); // => true
```
