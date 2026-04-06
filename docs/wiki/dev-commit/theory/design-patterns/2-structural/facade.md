# Facade (Фасад)

## Информация

::: tip Определение

- **Facade** - предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку
- _Пример_: библиотека jQuery
  :::

## Примеры

::: details MemeQuery

```js
const $ = function (target) {
  return new QuerySelector(target);
};
function QuerySelector(target) {
  this.target = document.querySelector(target);
}
QuerySelector.prototype.html = function (html) {
  this.target.innerHTML = html;
  return this;
};

$("#app").html("Meeemee").html("Some JS design patterns");
```

:::

::: details Жалобы от пользователей

```js
// Жалобы от пользователей
class Complaints {
  constructor() {
    this.complaints = [];
  }

  // Получние complaint
  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    // Будет реализован у потомков
    return this.reply(complaint);
  }
}

// Продуктовые жалобы
class ProductComplaints extends Complaints {
  // Изменение только метода reply
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

// Сервисная жалоба
class ServiceComplaints extends Complaints {
  // Изменение только метода reply
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

// Класс Фасад
class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === "service") {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

// => "Service: 1682962725141: Vladilen (Недоступен)"
console.log(registry.register("Vladilen", "service", "Недоступен"));
// => "Product: 1682962725142: Elena (Ошибка)"
console.log(registry.register("Elena", "product", "Ошибка"));
```

:::
