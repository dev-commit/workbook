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
}
```

```js
/** В одну строчку */
```

### Список TODO

```js
// TODO: найти лучшее решение
```
- TODO
- FIXME
- BUG
- NOTE
- OPTIMIZE
- HACK
- XXX

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
