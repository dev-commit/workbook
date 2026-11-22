# Proxy

## Информация

::: tip Определение

- **Прокси (proxy)** - особый объект, смысл которого – перехватывать обращения к другому объекту/функции и, при необходимости, модифицировать их

:::

- Прокси позволяет модифицировать поведение объекта как угодно, перехватывать любые обращения к его свойствам и методам, включая вызовы для функций
- Почти любая операция может быть перехвачена и обработана прокси до или даже вместо доступа к объекту target, например: чтение и запись свойств, получение списка свойств, вызов функции (если target – функция)
- Если ловушки нет – операция идёт над target

::: danger

**`let proxy = new Proxy(target, handler)`**

> - `target` - объект, обращения к которому надо перехватывать
> - `handler` - объект с «ловушками»: функциями-перехватчиками для операций к target

:::

## Методы

### Основные

<v-details title="get и set">

::: danger

**`get(target, property, receiver)`** - срабатывает при чтении свойства из прокси

> - `target` - целевой объект, тот же, который был передан первым аргументом в new Proxy
> - `property` - имя свойства
> - `receiver` - объект, к которому было применено присваивание. Обычно сам прокси, либо прототипно наследующий от него

:::

::: danger

**`set(target, property, value, receiver)`** - срабатывает при записи свойства в прокси

> - `target` - целевой объект, тот же, который был передан первым аргументом в new Proxy
> - `property` - имя свойства
> - `value` - значение свойства
> - `receiver` - объект, к которому было применено присваивание, обычно сам прокси, либо прототипно наследующий от него

:::

- Метод set должен вернуть true, если присвоение успешно обработано и false в случае ошибки (приведёт к генерации TypeError)

```js
let user = {};

let proxy = new Proxy(user, {
  get(target, prop) {
    console.log(`Чтение ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Запись ${prop} ${value}`);
    target[prop] = value;
    return true;
  },
});

proxy.firstName = "Tony"; // Запись
proxy.firstName; // Чтение
console.log(user.firstName); // => 'Tony'
```

</v-details>

<v-details title="has">

- Ловушка `has` срабатывает в операторе `in` и некоторых других случаях, когда проверяется наличие свойства

```js
// dictionary будет всегда возвращать true для любой in-проверки:
let dictionary = {
  Hello: "Привет",
};

dictionary = new Proxy(dictionary, {
  has(target, phrase) {
    return true;
  },
});

alert("BlaBlaBla" in dictionary); // true
```

<v-details title="">
</v-details>
## deleteProperty

- Ловушка deleteProperty по синтаксису аналогична get/has. Срабатывает при операции delete, должна вернуть true, если удаление было успешным

```js
// delete не повлияет на исходный объект, так как все операции перехватываются и «аннигилируются» прокси

let dictionary = {
  Hello: "Привет",
};

let proxy = new Proxy(dictionary, {
  deleteProperty(target, phrase) {
    return true; // Ничего не делаем, но возвращает true
  },
});

// Не удалит свойство
delete proxy["Hello"];

alert("Hello" in dictionary); // true

// Будет то же самое, что и выше
// так как нет ловушки has, операция in сработает на исходном объекте
alert("Hello" in proxy); // true
```

</v-details>

<v-details title="apply">

- Если аргумент target прокси – функция, то становится доступна ловушка apply для её вызова

::: danger

**`apply(target, thisArgument, argumentsList)`**

> - `target` - исходный объект
> - `thisArgument` - контекст this вызова
> - `argumentsList` - аргументы вызова в виде массива

:::

```js
// Может обработать вызов сама и/или передать его функции
function sum(a, b) {
  return a + b;
}

let proxy = new Proxy(sum, {
  // Передаст вызов в target, предварительно сообщив о нём
  apply: function (target, thisArg, argumentsList) {
    alert(`Буду вычислять сумму: ${argumentsList}`);
    return target.apply(thisArg, argumentsList);
  },
});

// Выведет сначала сообщение из прокси,
// а затем уже сумму
alert(proxy(1, 2));
```

</v-details>

<v-details title="construct">

- Ловушка construct(target, argumentsList) перехватывает вызовы при помощи new. Она получает исходный объект target и список аргументов argumentsList

```js
// Передаёт операцию создания исходному классу или функции-конструктору, выводя сообщение об этом

function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

let UserProxy = new Proxy(User, {
  // Передаст вызов new User, предварительно сообщив о нём
  construct: function (target, argumentsList) {
    alert(`Запуск new с аргументами: ${argumentsList}`);
    return new target(...argumentsList);
  },
});

let user = new UserProxy("Tony", "Smith");

alert(user.name); // Tony
```

</v-details>

### Полный список возможных функций-перехватчиков, которые может задавать handler

- [getPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf) - перехватывает обращение к методу `getPrototypeOf`
- [setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/setPrototypeOf) - перехватывает обращение к методу `setPrototypeOf`
- [isExtensible](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/isExtensible) - перехватывает обращение к методу `isExtensible`
- [preventExtensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/preventExtensions) - перехватывает обращение к методу `preventExtensions`
- [getOwnPropertyDescriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor) - перехватывает обращение к методу `getOwnPropertyDescriptor`
- [defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/defineProperty) - перехватывает обращение к методу `defineProperty`
- [has](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/has) - перехватывает проверку существования свойства, которая используется в операторе `in` и в некоторых других методах встроенных объектов
- [get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get) - перехватывает чтение свойства
- [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) - перехватывает запись свойства
- [deleteProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty) - перехватывает удаление свойства оператором `delete`
- [enumerate](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/enumerate) - срабатывает при вызове `for..in` или `for..of`, возвращает итератор для свойств объекта
- [ownKeys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys) - перехватывает обращения к методу `getOwnPropertyNames`
- [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply) - перехватывает вызовы `target()`
- [construct](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct) - перехватывает вызовы new `target()`

### Комментарии

- Каждый перехватчик запускается с `handler` в качестве `this`. Это означает, что `handler` кроме ловушек может содержать и другие полезные свойства и методы
- Каждый перехватчик получает в аргументах `target` и дополнительные параметры в зависимости от типа
- Если перехватчик в `handler` не указан, то операция совершается, как если бы была вызвана прямо на `target`
