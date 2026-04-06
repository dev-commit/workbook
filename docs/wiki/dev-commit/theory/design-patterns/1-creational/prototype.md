# Prototype (Прототип)

## Информация

::: tip Определение

- **Prototype** - копирование объектов не вдаваясь в подробности их реализации
- Можно создавать объекты, взяв за основу другие объекты
- В шаблоне Prototype есть базовая реализация класса и использую упрошенный интерфейс можно создать клоны объектов. Клоны могут понадобиться, чтобы в случае необходимости изменить их структуру и заточить для выполнения конктерной задачи
  :::

## Примеры

### TeslaCar

```js
class TeslaCar {
  // Все характеристити авто
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }
  // Клон объекта
  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

// Создание прототипа (эталонный автомобиль)
const prototypeCar = new TeslaCar("Premium", 100, "black", false);

// Создание клонов (производство авто)
const car1 = prototypeCar.produce(); // => { "model": "Premium", "price": 100, "interior": "white", "autopilot": true }
const car2 = prototypeCar.produce(); // => { "model": "Premium", "price": 100, "interior": "black", "autopilot": false }
const car3 = prototypeCar.produce(); // => { "model": "Premium", "price": 100, "interior": "black", "autopilot": false }

// Кастомизация авто
// Остальные авто (включая эталонный) остались без изменения
car1.interior = "white";
car1.autopilot = true;
```

### CarWithOwner

```js
const car = {
  wheels: 4,
  init() {
    console.log(this.wheels, this.owner);
  },
};

// car - будет прототипом для carWithOwner
const carWithOwner = Object.create(car, {
  owner: {
    value: "Jack",
  },
});

console.log(carWithOwner.__proto__ === car); // => true

carWithOwner.init();
```
