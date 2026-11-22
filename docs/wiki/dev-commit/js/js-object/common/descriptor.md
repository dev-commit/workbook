# Дескрипторы свойств

## Информация

::: tip Определение

- **Свойства объекта** имеют: _имя_, _значение_ (атрибут value), _атрибуты_ (writable, enumerable, configurable)

:::

```js
Object.getOwnPropertyDescriptor(obj, "name"); // Получение дескриптора свойств
Object.defineProperty(obj, prop, descriptor); // Переопределение дескриптора свойств
Object.defineProperties(obj, descriptors); // Позволяет объявить сразу несколько свойств
```

## Получение дескриптора свойств

```js
const person = {
  name: "Tony",
  age: 20,
};
const a = Object.getOwnPropertyDescriptor(person, "name");
// {value: "Tony", writable: true, enumerable: true, configurable: true }
```

## Переопределение дескриптора свойств

<!-- prettier-ignore -->
```js
Object.defineProperty(obj, prop, descriptor)
  obj        // Объект, в котором объявляется свойство
  prop       // Имя свойства, которое нужно объявить или модифицировать
  descriptor // Дескриптор - объект, который описывает поведение свойства
```

```js
// 1-объект, 2-свойство, 3-дескриптор
// Перечислены все поля дескриптора. value/writable и get/set вместе указывать нельзя: будет TypeError
Object.defineProperty(person, "name", {
  value: "Jack", // Значение свойства (по умолчанию undefined)
  writable: false, // Значение свойства можно менять (по умолчанию false)
  configurable: false, // Возможность удаления свойства и изменения атрибутов свойства при помощи новых вызовов defineProperty (по умолчанию false)
  enumerable: false, // Свойство просматривается в цикле for..in и методе Object.keys() (по умолчанию false)
  get() {}, // Функция, которая возвращает значение свойства (по умолчанию undefined)
  set() {}, // Функция, которая записывает значение свойства (по умолчанию undefined)
});
```

### Объект с парами свойство:дескриптор

```js
// 1-объект, 2-объект с парами свойство:дескриптор
Object.defineProperties(person, {
  name: {
    value: "Jack",
    writable: false,
  },
  age: {
    value: 25,
    writable: false,
  },
});
```

### Обычное свойство

```js
// Оба вызова добавляют в объект user обычное (удаляемое, изменяемое, перечисляемое) свойство
const user = {};
user.name = "Tony";
Object.defineProperty(user, "name", {
  value: "Tony",
  configurable: true,
  writable: true,
  enumerable: true,
});
```

## Геттеры и сеттеры

```js
const user = {
  firstName: "Вася",
  surname: "Петров",
};

Object.defineProperty(user, "fullName", {
  get() {
    return this.firstName + " " + this.surname;
  },
  set(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.surname = split[1];
  },
});

user.fullName = "Петя Иванов";
alert(user.fullName); // Петя Иванов
alert(user.firstName); // Петя
alert(user.surname); // Иванов
```
