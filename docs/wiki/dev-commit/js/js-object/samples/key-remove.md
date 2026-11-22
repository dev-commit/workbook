# Удаление ключа

## Использование _Lodash_

- _Lodash_ функция `omit`

```js
import { omit } from "lodash";

let obj = {
  Cow: "Moo",
  Cat: "Meow",
  Dog: "Bark",
};

const a = omit(obj, "Cow"); // It will return a new object
// Result => { Cat: "Meow", Dog: "Bark" }
```

- Если вы хотите изменить текущий объект, назначьте возвращаемый объект текущему объекту

```js
obj = omit(obj, "Cow");
```

- Подключение через `_`

```js
import _ from "lodash";
const a = _.omit(obj, "Cow");
```

## Чистый JavaScript

### Использование delete (не иммутабельно)

```js
const thisIsObject = {
  Cow: "Moo",
  Cat: "Meow",
  Dog: "Bark",
};

delete thisIsObject["Cow"];
```

### Использование Object.entries

```js
const obj = {
  key1: "value1",
  key2: "value1",
  key3: "value2",
  key4: "value3",
};
```

- Нужно удалить все ключи со значением _value1_

```js
Object.entries(obj).forEach((n) => n[1] === "value1" && delete obj[n[0]]);
```

- Или, если на самом деле надо не удалять свойства из имеющегося объекта, а собрать новый

```js
Object.entries(obj).reduce(
  (acc, [k, v]) => (v !== "value1" && (acc[k] = v), acc),
  {},
);
// Или
Object.fromEntries(Object.entries(obj).filter((n) => n[1] !== "value1"));
```

### Использование деструктуризации

```js
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, ...noA } = myObject;
```
