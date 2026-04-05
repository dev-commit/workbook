# Composite (Компоновщик)

## Информация

::: tip Composite

- **Composite** - позволяет сгруппировать множество объектов в древовидную структуру и работать с этой структурой так, как-будто это один объект

:::

## Структура

**1. Деревовидная структура**

- Вложенные компоненты - "листья", связи между компонентами - "ветки"
- Объект, который не знает о вложенных в него структурах. Объект ревлизует те же методы, что и вложенные в него компоненты, но вместо вызова своего метода, он перает вызовы вложенным компонентам, а те передают в собственные вложенные структуры

**2. Единый интерфейс вызова**

- Клиент обращается к «листу» и к «контейнеру» одинаково — через общий контракт (одни и те же методы)
- Не важно, один ли элемент или целое поддерево: снаружи это один тип операции
- Реализация метода у контейнера обычно делегирует вызов дочерним узлам и агрегирует результат (или пробрасывает поведение по цепочке)

## Примеры

### Equipment

- Нужно посчитать себестоимость автомобиля как сумма всех его составных частей

```js
// Базовый интерфейс для запчастей
class Equipment {
  getPrice() {
    return this.price || 0;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  setPrice(price) {
    this.price = price;
  }
}
```

```js
// Запчасти
class Engine extends Equipment {
  constructor() {
    super();
    this.setName("Engine");
    this.setPrice(800);
  }
}
class Body extends Equipment {
  constructor() {
    super();
    this.setName("Body");
    this.setPrice(3000);
  }
}
class Tools extends Equipment {
  constructor() {
    super();
    this.setName("Tools");
    this.setPrice(4000);
  }
}
```

```js
// Класс-компоновщик, просчитывающий общую стоимость оборудования
class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }
  // Добавление оборудования в автомобиль
  add(equipment) {
    this.equipments.push(equipment);
  }
  // Генерирует массив цен
  getPrice() {
    return this.equipments
      .map((equipment) => equipment.getPrice())
      .reduce((a, b) => a + b);
  }
}
```

```js
class Car extends Composite {
  constructor() {
    super();
    this.setName("Audi");
  }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

const a1 = myCar.getName(); // => "Audi"
const a2 = myCar.getPrice(); // => 7800
```
