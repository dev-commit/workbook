# JSON

## Информация

::: tip Определение

- **JSON** - JavaScript Object Notation
- **Сериализация объектов** - преобразование объектов в строки

:::

- _В JSON можно хранить_ - объекты, массивы, строки, числа, true, false, null. Другие значения при сериализации превращаются в null

## Пример на `JSON.stringify` и `JSON.parse`

```js
const user = {
  name: "Tony",
  id: 25,
};

const userData = JSON.stringify(user); // Объект в JSON ("{"name":"Tony","id":25}")
const userObj = JSON.parse(userData); // JSON в объект
```

## JSON.stringify

::: danger

**`JSON.stringify(value, replacer, space)`** - преобразует («сериализует») значение в JSON-строку

> - `value` - значение
> - `replacer` - массив свойств, которые подлежат сериализации
> - `space` - форматирование. Если число, то уровни вложенности в JSON оформляются указанным количеством пробелов, если строка, то вставляется эта строка

:::

### Форматирование

```js
const user = {
  name: "Вася",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

// Отформатированный текст (аналогичные записи)
const str1 = JSON.stringify(user, "", 4);
const str2 = JSON.stringify(user, null, 4);
```

### Исключение свойств

```js
const user = {
  name: "Вася",
  age: 25,
  window: window,
};

console.log(JSON.stringify(user, ["name", "age"])); // {"name":"Вася","age":25}
```

### Исключение свойств (передача функции)

- Вторым параметром можно передать функцию _function(key, value)_, которая возвращает сериализованное _value_ либо _undefined_, если его не нужно включать в результат
- Функция replacer работает рекурсивно. Если объект содержит вложенные объекты, массивы и т.п., то все они пройдут через replacer

```js
const user = {
  name: "Вася",
  age: 25,
  window: window,
};

const str = JSON.stringify(user, function (key, value) {
  if (key == "window") return undefined;
  return value;
});

console.log(str); // {"name":"Вася","age":25}
// Функция пропустит свойство с названием window.
// Для остальных она возвращает значение, передавая его стандартному алгоритму
```

### Метод `toJSON`

- Если в объекте есть метод toJSON, при преобразовании stringify данные будут браться из него
- Если такого метода нет - перечисляются его свойства, кроме функций

```js
const user = {
  name: "Tony",
  id: 25,
  toJSON() {
    return {
      name: this.name,
    };
  },
};

const userData = JSON.stringify(user); // Объект в JSON ("{"name":"Tony"}")
```

## JSON.parse(str, reviver)

::: danger

**`JSON.parse(str, reviver)`** - преобразует строку с данными в формате JSON в JavaScript-объект/массив/значение

> - `str` - строка с данными в формате JSON
> - `reviver` - задание правила, функция function(key, value)

:::

### Умный разбор

- Для интеллектуального восстановления из строки у JSON.parse(str, reviver) есть второй параметр reviver, который является функцией `function(key, value)`
- Если она указана, то в процессе чтения объекта из строки JSON.parse передаёт ей по очереди все создаваемые пары ключ-значение и может возвратить либо преобразованное значение, либо undefined, если его нужно пропустить

```js
const str = '{"title":"Конференция", "date":"2014-11-30T12:00:00.000Z"}';

const event = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(event.date.getDate());
```
