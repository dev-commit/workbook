# Наследование

## ES5

::: tip Определение

- **Класс** - _функция-конструктор_ вместе с её _prototype_

:::

- _Класс_ - конструктор объектов

```js
// Родитель
function User(name) {
  this.name = name;
}
User.prototype.getName = function () {
  console.log(this.name);
};

// Наследник
function Admin() {
  // Для наследования собственных свойств User()
  User.apply(this, arguments);
}

// В прототип Admin добавили всё из прототипа User
Admin.prototype = Object.create(User.prototype);

// Результат
const admin = new Admin("Tony");

admin.getName(); // => "Tony"
console.log(admin); // => Object { name: "Tony" }, getName в прототипе
```

## Установка прототипа

### 1. Object.create (верно)

```js
User.prototype = Object.create(Person.prototype);
```

- _Object.create_ создает новый пустой объект, прототипом которого устанавливает ссылку на _Person.prototype_
- При вызове _User_ через _new_, создастся новый объект и в свойство _`__proto__`_ установится ссылка на свой _prototype_

### 2. Простое присваивание прототипов (неверно)

```js
User.prototype = Person.prototype;
```

- Если добавлять методы в _User.prototype_, они попадут в _Person.prototype_
- Перезатрется текущий прототип у _User_: в _User.prototype_ будет пустой объект со свойством _constructor_, который ссылается на _User_. Если в коде могут быть добавлены методы, они перезатрутся

### 3. Через new (неверно)

```js
User.prototype = new Person();
```

- При вызове _new_ получаем объект, наполненный свойствами с прототипом, но нужно получить пустой объект, чтобы не было свойств
- При _new Person_ прилетит мусор в виде собственных свойств класса _Person_

## ES6-классы

::: tip Определение

- **Класс** - функция/шаблон, предназначенный для создания объектов и методов
- **Конструктор** - метод, который вызывается в момент создания объекта, т.е. когда используется ключевое слово new, он создает свойства и инициализирует, т.е. подготавливает объект к использованию

:::

- Если у подкласса нет конструктора, он будет использовать конструктор родителя
- Если подклассу указать конструктор, то он должен вызывать в начале конструктор родительского класса `super()`
- Метод `super()` позволяет наследовать свойства и методы из прототипа

```js
class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

class Admin extends User {
  constructor(name) {
    super(name);
  }
}

const admin = new Admin("Tony");
admin.getName(); // => "Tony"
console.log(admin); // => Object { name: "Tony" }
```
