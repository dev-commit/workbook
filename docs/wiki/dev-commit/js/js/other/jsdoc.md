# Документирование. Синтаксис JSDoc

## Варианты

```js
/**
 * Что делает функция
 * @param {Object} id - идентификатор
 * @return {Boolean} - true показать, false скрыть
 */
const foo = (id) => {
  return true;
};

/** В одну строчку */
```

### Список TODO

```js
// TODO: найти лучшее решение
```

- _TODO_
- _FIXME_
- _BUG_
- _NOTE_
- _OPTIMIZE_
- _HACK_
- _XXX_

## Примеры

```js
/**
 * Возвращает x в степени n, только для натуральных n
 * @param {number} x Число для возведения в степень.
 * @param {number} n Показатель степени, натуральное число.
 * @return {number} x в степени n.
 */
function pow(x, n) {
  ...
}
```
