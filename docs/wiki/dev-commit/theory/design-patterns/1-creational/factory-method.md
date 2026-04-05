# Factory Method (Фабричный метод)

## Информация

::: tip Factory

- **Factory** - создание инстансов определенного типа, но с разными значениями на основании входных данных
- _Применение_: когда нужно создавать множество однотипных объектов (одинаковая структура, но разные данные). Когда есть коллекция элементов, похожих по фунцкионалу
- _Проблема_: при большом кол-ве создаваемых объектов, структура Factory Method начнет разрастаться. Эту проблему поможет решить паттерн Abstract Factory

:::

## Структура

- Класс-конструктор, который генерирует новый объект (может быть несколько)
- Класс, который вызывает создание нового объекта с определенными параметрами

## Примеры

::: details Фабрика автомобилей

```js
class Bmw {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class BmwFactory {
  create(type) {
    if (type === "X5") return new Bmw(type, 100);
    if (type === "X6") return new Bmw(type, 200);
  }
}

const factory = new BmwFactory();

const a1 = factory.create("X5"); // => { "model": "X5", "price": 100 }
const a2 = factory.create("X6"); // => { "model": "X6", "price": 200 }
```

:::

::: details Пример простой фабрики

```js
class WoodenDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

const DoorFactory = {
  makeDoor(width, height) {
    return new WoodenDoor(width, height);
  },
};

const door = DoorFactory.makeDoor(100, 200);
console.log("Width:", door.getWidth());
console.log("Height:", door.getHeight());
```

:::

::: details Пример с разными видами подписки

```js
// Виды подписки
class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}
class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}
class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

// Абстракция, которая объединяет классы SimpleMembership, StandardMembership и PremiumMembership
// и определяет какой инстанс создавать в зависимости от типа
class MemberFactory {
  // Объект с ссылками на классы
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  // Создание нужного инстанса и возвращение его
  create(name, type = "simple") {
    // Класс в соответствии с типом
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    // Модификация инстанса
    member.type = type;
    member.define = function () {
      console.log(this.name, this.type, this.cost);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Vladilen", "simple"),
  factory.create("Elena", "premium"),
  factory.create("Vasilisa", "standard"),
  factory.create("Ivan", "premium"),
  factory.create("Petr"),
];

members.forEach((m) => {
  m.define();
});
```

:::
