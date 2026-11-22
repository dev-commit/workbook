# Полифил Object.create

## Информация

::: tip Определение

- **Object.create** - создаёт пустой объект с `__proto__`, равным первому аргументу

:::

## Исходный Object.create()

```js
const objFirst = {
  name: "Tony",
};

const objSecond = Object.create(objFirst); // => {} __proto__: name: "Tony"
```

## Запись в виде полифила

```js
// Через prototype
if (!Object.create) {
  Object.create = function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };
}
```

```js
// Через setPrototypeOf
if (!Object.create) {
  Object.create = function (proto) {
    const newObject = {};
    Object.setPrototypeOf(newObject, proto);
    return newObject;
  };
}
```

```js
// Через __proto__
if (!Object.create) {
  Object.create = function (proto) {
    const newObject = {};
    newObject.__proto__ = proto;
    return newObject;
  };
}
```

```js
const o = Object.create({ name: "Tony" });

// Получить доступ к prototype
o.__proto__;
Object.getPrototypeOf(o);
```

## Запись в виде функции

```js
const objFirst = {
  name: "Tony",
};

// if (!Object.create) Object.create = create; // Проверка поддержки Object.create
const objSecond = create(objFirst); // => {} __proto__: name: "Tony"

function create(proto) {
  // 1. Создана новая функция F. Она ничего не делает с this,
  // так что если вызвать new F, то получим пустой объект
  function F() {}

  // 2. Свойство F.prototype устанавливается в будущий прототип proto
  F.prototype = proto;

  // 3. Результатом вызова new F будет пустой объект с __proto__
  // равным значению F.prototype. Возвращаем объект
  return new F();
}
```

## Множественное наследование

```js
const objFirst = {
  a: 1,
};
const objSecond = {
  p: { value: 20 },
  k: { value: 30 },
};

function create(objFirst, objSecond) {
  function F() {}
  F.prototype = objFirst;

  let myProto = new F();

  for (let key in objSecond) {
    myProto[key] = objSecond[key].value;
  }
  return myProto;
}

const obj = create(objFirst, objSecond);
```
