# throttle()

## Информация

::: danger

**`throttle(fn, wait)`** - создает вариант функции, которая при повторяющихся вызовах выполняется через указанный временной интервал (аргумент wait)

> - `fn` - функция, которую необходимо выполнить
> - `wait` - интервал времени

:::

- Декоратор эффективен для обработки быстро повторяющихся событий

```js
function throttle(fn, wait) {
  let lastTime;
  return function throttled() {
    let timeSinceLastExecution = Date.now() - lastTime;
    if (!lastTime || timeSinceLastExecution >= wait) {
      fn.apply(this, arguments);
      lastTime = Date.now();
    }
  };
}

let throttledProcess = throttle(process, 1000);
$(window).mousemove(throttledProcess);
```

- Здесь движение мыши генерирует множество событий _mousemove_, тогда как оригинальная функция `process()` вызывается лишь раз в секунду
