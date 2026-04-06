# Proxy (Заместитель)

## Информация

::: tip Определение

- **Proxy** - позволяет вместо реальных объектов предоставляет "объекты-заменители". Эти объекты перехватывают вызов к оригиналам и позволяют сделать что-то до или после обращения к оригинальному объекту
- Это "прослойка", которая позволяет произвести дополнительные манипуляции до того как отдать контроль
- Ловушки на поля объектов, на вызов функции и т.д.
- Позволяет гибко определять работу приложения в дальнейшем
- _Пример_: избавление лишних запросов на сервер путем кэширования. Если запрашивамеые данные уже были получены, то запрос не отправляются, а данные берутся из кеша

:::

## Виды Proxy

- **Виртуальный Proxy** - аналог Lazy Loading. Загружка тяжелого объекта только в случае необходимости в нем
- **Логирующий Proxy** - хранение истории обращений
- **Защищающий** - авторизация
- **Кэширующий** - частичное кеширование результатов запроса клиента и управление ими

## Примеры

::: details Авторизация

```js
// Оригинальный класс по открытию авто
class CarAccess {
  open() {
    console.log("Opening car door");
  }
  close() {
    console.log("Closing the car door");
  }
}

// Proxy-объект, обеспечивающий безопасность открытия дверей
class SecuritySystem {
  constructor(door) {
    this.door = door;
  }
  open(password) {
    if (this.authenticate(password)) {
      // Если авториазация успешная, то вызывается
      // оригинальный метод open из CarAccess
      this.door.open();
    } else {
      console.log("Access denied!");
    }
  }
  authenticate(password) {
    return password === "Ilon";
  }
  close() {
    this.door.close();
  }
}

const door = new SecuritySystem(new CarAccess());
door.open("Jack"); // => "Access denied!"
door.open("Ilon"); // => "Opening car door"
door.close(); // => "Closing the car door"
```

:::

::: details Работа с сервером

```js
// Связь с сервером
function networkFetch(url) {
  return `${url} - Ответ с сервера`;
}

// Set вернет уникальные данные
const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

console.log(proxiedFetch("angular.io")); // => "angular.io - Ответ с сервера"
console.log(proxiedFetch("react.io")); // => "react.io - Ответ с сервера"
console.log(proxiedFetch("angular.io")); // => "angular.io - Ответ из кэша"
```

:::
