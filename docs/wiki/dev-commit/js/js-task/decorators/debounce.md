# debounce()

создает вариант функции, которая выполняет оригинальную функцию спустя wait миллисекунд после предыдующего вызова декорированной функции

функция, которую необходимо выполнить
время, через которое необходимо выполнить функцию

- Паттерн также применяется в работе с повторяющимися событиями. Он полезен, если функциональность должна быть выполнена по завершению очереди событий
- Функция debounce() часто используется вместе с событиями scroll, resize, mousemove и keypress

```js
function debounce(fn, interval) {
  let timer;
  return function debounced() {
    clearTimeout(timer);
    let args = arguments;
    let that = this;
    timer = setTimeout(function callOriginalFn() {
      fn.apply(that, args);
    }, interval);
  };
}

let delayProcess = debounce(process, 400);
$(window).resize(delayProcess);
```
