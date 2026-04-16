# __proto__ и prototype

::: info
https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co
:::

- **__proto__** - свойство объекта Object.prototype, хранящее ссылку на свойство prototype конструктора
- **prototype** - свойство функции с единственным свойством constructor, которое ссылается на саму функцию
- Используется: как прототип при создании новых объектов оператором new
- Цель: указывать __proto__ для новых объектов. При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора
- **constructor** - свойство, ссылающеется на саму функцию

<!-- <img src="../@img/prototype.png" width="650"/> -->

## __proto__

- При обращении к любому свойству объекта, оно в первую очередь ищется в самом объекте. Но если его там нет, поиск происходит в свойстве __proto__. Если его нет и там, оно ищется дальше по цепочке (prototype chain)
- __proto__ - наследование на уровне объектов

<!-- <img src="../@img/prototype-chain.png"/> -->

## prototype

- <!-- <img src="../@img/prototype-prop.png"/> -->
- Прототип - ссылка на другой объект, предоставляющий методы и свойства
- Есть у каждой функции, кроме стрелочной
- Имеет смысл только у конструктора, когда есть вызов new
- Значением prototype может быть только объект

## Схемы

<!-- <img src="../@img/prototype-scheme.png" width="650px"/> -->

## Примеры

### 1. Перетирание прототипа

- При создании объекта его __proto__ 1 раз получает ссылку на prototype функции конструктора
- Эта ссылка остаётся при Fn.prototype = {}; и по-прежнему указывает на старое значение, но к функции конструктору уже не имеет отношения
- При Fn.prototype = {} не просто добавили объект, а поменяли ссылку и новые отнаследованные объекты получат уже ее

<!-- <img src="../@img/prototype-clear-link.jpg" width="400px"/> -->

#### Всё стандартно

```js
function Fn() {}

Fn.prototype = {
	isConnected: true
};

let connect = new Fn();

console.log(connect.isConnected); // => true

Fn.prototype.isConnected = false;

console.log(connect.isConnected); // => false
```

#### Перетирание протоипа

```js
function Fn() {}

Fn.prototype = {
    isConnected: true
};

let connect = new Fn();

console.log(connect.isConnected); // true

Fn.prototype = {};

console.log(connect.isConnected); // true
```

### 2

```js
function User() {
    this.name = 'Tony';
}
function Admin() {
    this.id = 77;
}
Admin.prototype = new User();
// Admin.__proto__ = new User();
const admin = new Admin(); // => Admin {id: 77, __proto__: User name: "Tony"}
```

### 3

<!-- <img class="center" height="250px" src="../@img/proto-tree.jpg"/> -->

```js
function User() {
    this.name = 'Tony';
}
User.prototype.myFunc = function() {}
Object.prototype.myFuncObject = function() {}
let obj = new User();
```
