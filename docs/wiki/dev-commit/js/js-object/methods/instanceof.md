# instanceof

    проверка, какому классу принадлежит объект, с учетом прототипного наследования

```js
function Car(make, model) {
	this.make = make;
	this.model = model;
}
const auto = new Car('Honda', 'Accord');

const a = auto instanceof Car; // => true
const a = auto instanceof Object; // => true
```

## Информация

- Оператор obj instanceof Func проверяет что obj является результатом вызова new Func. Он учитывает цепочку __proto__, поэтому наследование поддерживается
- Оператор instanceof не сможет проверить тип значения, если объект создан в одном окне/фрейме, а проверяется в другом, т.к. в каждом окне своя иерархия объектов. Для точной проверки типов встроенных объектов можно использовать свойство [[Class]]
- Оператор instanceof особенно востребован в случаях, когда мы работаем с иерархиями классов. Это наилучший способ проверить принадлежность тому или иному классу с учётом наследования
- 1. Получить obj.__proto__
- 2. Сравнить obj.__proto__ с Constructor.prototype
- 3. Если не совпадает, тогда заменить obj на obj.__proto__ и повторить проверку на шаге 2 до тех пор, пока либо не найдется совпадение (результат true), либо цепочка прототипов не закончится (результат false)

```js
function ClassParent() {}
const parent = new ClassParent();
const a = parent instanceof ClassParent; // true
// parent.__proto__ == ClassParent.prototype;
```

```js
// массив arr принадлежит классу Array
// но также и является объектом Object
const arr = [];
const a = arr instanceof Array; // true
const a = arr instanceof Object; // true
// arr.__proto__.__proto__ == Object.prototype
```

```js
// сама функция-конструктор не участвует в процессе проверки, важна только цепочка прототипов для проверяемого объекта
// это может приводить к ошибкам в проверке при изменении prototype
function Rabbit() {}
const rabbit = new Rabbit();
Rabbit.prototype = {}; // изменили prototype...
const a = rabbit instanceof Rabbit; // false
```
