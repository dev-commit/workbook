# once()

## Информация

::: danger

**`once(fn)`** - создает экземпляр функции, которая должна быть выполнена только один раз

> - `fn` - функция, которую необходимо выполнить

:::

- Паттерн может быть использован, например, для инициализации, когда нужно быть уверенным в единичном запуске функциональности, даже если сама функция вызвана в нескольких местах

```js
function once(fn) {
  let returnValue;
  let canRun = true;
  return function runOnce() {
    if (canRun) {
      returnValue = fn.apply(this, arguments);
      canRun = false;
    }
    return returnValue;
  };
}

let processonce = once(process);
processonce(); // process
processonce(); //
```

- Функция _once()_ возвращает другую функцию - _runOnce()_, использующую замыкание
- Вызов оригинальной функции осуществляется через передачу _this_ и _arguments_ в метод _apply_: `fn.apply(this, arguments)`
