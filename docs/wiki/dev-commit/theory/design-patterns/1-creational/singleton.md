# Singleton (Синглтон)

## Информация

::: tip Singleton

- **Singleton** - гарантирует что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа в однопоточном приложении
- В рамках применения этого паттерна новый экземпляр класса создаётся в том случае, если он пока не создан. Если же экземпляр класса уже существует, то, при попытке обращения к конструктору, возвращается ссылка на соответствующий объект. Последующие вызовы конструктора всегда будут возвращать тот же самый объект
  :::

### Какие проблемы решает

1. _Гарантирует наличие единственного экземпляра класса_. Чаще всего это полезно для доступа к какому-то общему ресурсу, н-р, базе данных. Такое поведение невозможно реализовать с помощью обычного конструктора, так как конструктор класса всегда возвращает новый объект
2. _Предоставляет глобальную точку доступа_. Это не просто глобальная переменная, через которую можно достучаться к определённому объекту. Глобальные переменные не защищены от записи, поэтому любой код может подменять их значения без вашего ведома

### Обычный класс a !== b

```js
class usualClass {
  constructor() {}
  method() {}
}

const a = new usualClass();
const b = new usualClass();
console.log(a === b); // false
```

## Варианты Singleton

### Class Implementation (ES6)

::: details Использование статического свойства в constructor

- К статичному свойству можно обращаться не создавая инстанса класса

```js
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
```

:::

::: details Использование статического свойства в constructor (аналогичный вариант)

```js
class Singleton {
  constructor() {
    const instance = this.constructor.instance;
    if (!instance) {
      this.constructor.instance = this;
    }
    return instance;
  }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
```

:::

::: details Использование глобальной переменной

```js
let instance = null;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
```

:::

### Function Implementation (ES5)

::: details Только Singleton

```js
const Singleton = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = this;
    }
    return instance;
  };
})();

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
```

:::

::: details Singleton и методы

```js
const Singleton = (function () {
  let instance = null;
  function func() {
    if (!instance) {
      instance = this;
      this.size = 100;
    }
    return instance;
  }
  func.prototype.getSize = function () {
    return this.size;
  };
  func.prototype.setSize = function (size) {
    this.size = size;
  };
  return func;
})();

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true

console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200
```

:::

### Представление класса в виде объектного литерала

::: details Пример

- Всякий раз, при обращении к переменной user, мы получаем ссылку на один и тот же объект

```js
const user = {
  name: "Tony",
  greet: function () {
    console.log("Hello!");
  },
};
```

:::

## Применение

::: details Работа с БД

- Чтобы избежать лишних подключений к БД
- Класс-менеджер для работы с базой данных: класс, который управляет соединением с базой данных и обеспечивает выполнение запросов к базе данных. Используется паттерн Singleton, чтобы гарантировать, что все запросы выполняются через единственное соединение с базой данных

```js
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }
  getData() {
    return this.data;
  }
}

const mongo = new Database("MongoDB");
console.log(mongo.getData()); //=> "MongoDB"

const mysql = new Database("MySQL");
console.log(mysql.getData()); // => "MongoDB"
```

:::

::: details Модальное окно

```js
class Modal {
  constructor() {
    if (Modal.instance) {
      return Modal.instance;
    }
    this.modalElement = document.createElement("div");
    this.modalElement.className = "modal";
    Modal.instance = this;
  }
  open() {}
  close() {}
}

const a = new Modal();
const b = new Modal();
console.log(a === b); // true
```

:::

::: details Логгер

- Логгер: класс, который записывает информацию о событиях в приложении. Часто используется для отладки. Для того, чтобы сохранить все записи в одном месте и не допустить перезаписи уже сохраненной информации, используется паттерн Singleton

:::

::: details Конфигурация приложения

- Конфигурация приложения: класс, который хранит настройки и конфигурационные параметры приложения. Используется паттерн Singleton, чтобы гарантировать, что все экземпляры приложения используют одни и те же настройки.

:::

::: details Сервисы в Angular

- В сервисе родительского компонента может храниться state. Когда дочерний компонент будет обращаться к сервису родительского компонента, то state будет доступен для него. При отсутсвии Singleton создался бы новый экземпляр класса без сохранения state для других компонентов

:::

::: details Корзина покупок

- Корзина покупок в интернет-магазине
  :::
