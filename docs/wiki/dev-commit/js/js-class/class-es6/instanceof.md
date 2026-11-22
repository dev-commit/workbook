# Проверка класса: "instanceof"

## Информация

::: tip Определение

- **instanceof** позволяет проверить, какому классу принадлежит объект, с учетом прототипного наследования

:::

- Оператор obj instanceof Func проверяет что obj является результатом вызова new Func. Он учитывает цепочку _`__proto__`_, поэтому наследование поддерживается
- Оператор _instanceof_ не сможет проверить тип значения, если объект создан в одном окне/фрейме, а проверяется в другом, т.к. в каждом окне своя иерархия объектов. Для точной проверки типов встроенных объектов можно использовать `Object.prototype.toString.call(obj)`: он возвращает внутренний класс объекта (_[[Class]]_), н-р `[object Array]`
- Оператор _instanceof_ особенно востребован в случаях, когда мы работаем с иерархиями классов. Это наилучший способ проверить принадлежность тому или иному классу с учётом наследования

### Алгоритм проверки obj instanceof Constructor

1. Получить `obj.__proto__`
2. Сравнить `obj.__proto__` с `Constructor.prototype`
3. Если не совпадает, тогда заменить `obj` на `obj.__proto__` и повторить проверку на шаге 2 до тех пор, пока либо не найдется совпадение (результат true), либо цепочка прототипов не закончится (результат false)

```js
function ClassParent() {}
const parent = new ClassParent();
const a = parent instanceof ClassParent; // true
// parent.__proto__ == ClassParent.prototype;
```

```js
// Массив arr принадлежит классу Array
// но также и является объектом Object
const arr = [];
const a = arr instanceof Array; // true
const a = arr instanceof Object; // true
// arr.__proto__.__proto__ == Object.prototype
```

```js
// Сама функция-конструктор не участвует в процессе проверки, важна только цепочка прототипов для проверяемого объекта.
// Это может приводить к ошибкам в проверке при изменении prototype
function Rabbit() {}
const rabbit = new Rabbit();
Rabbit.prototype = {}; // Изменили prototype...
const a = rabbit instanceof Rabbit; // false
```
