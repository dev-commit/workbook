# requiremodule.exports

## Импорт

```js
const data =require('./data');

const a = data.a;
const b = data.b;
```

## Экспорт

### Экспорт одного значения

#### Переменная

```js
// export
const text = 'Hello';
module.exports = text;

// import
const text = require('./data');
```

#### Функция

```js
// export
const foo = () => console.log('Hello');
module.exports = foo;

// import
const foo = require('./data');
```

### Экспорт нескольких значений

Пример 1

```js
const a = 'Hello';
const b = 'World';

module.exports.a = a;
module.exports.b = b;
```

Пример 2

```js
module.exports.a = 'Hello';
module.exports.b = 'World';
```

Пример 3

```js
const a = 'Hello';
const b = 'World';

module.exports = {
    a: a,
    b: b,
};
```
