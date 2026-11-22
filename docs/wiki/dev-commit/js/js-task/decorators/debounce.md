# debounce()

## Информация

::: danger

**`debounce(fn, wait)`** - создает вариант функции, которая выполняет оригинальную функцию спустя wait миллисекунд после предыдущего вызова декорированной функции

> - `fn` - функция, которую необходимо выполнить
> - `wait` - время, через которое необходимо выполнить функцию

:::

- Паттерн также применяется в работе с повторяющимися событиями. Он полезен, если функциональность должна быть выполнена по завершению очереди событий
- Функция _debounce()_ часто используется вместе с событиями _scroll_, _resize_, _mousemove_ и _keypress_

```js
function debounce(fn, wait) {
  let timer;
  return function debounced() {
    clearTimeout(timer);
    let args = arguments;
    let that = this;
    timer = setTimeout(function callOriginalFn() {
      fn.apply(that, args);
    }, wait);
  };
}

let delayProcess = debounce(process, 400);
$(window).resize(delayProcess);
```
