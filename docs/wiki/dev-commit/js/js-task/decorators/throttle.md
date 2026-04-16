# throttle()

	Создает вариант функции, которая при повторяющихся вызовах выполняется через указанный временной интервал (аргумент wait)
    
функция, которую необходимо выполнить
интервал времени

- Декоратор эффективен для обработки быстро повторяющихся событий

```js
function throttle(fn, interval) {
    let lastTime;
    return function throttled() {
        let timeSinceLastExecution = Date.now() - lastTime;
        if(!lastTime || (timeSinceLastExecution >= interval)) {
            fn.apply(this, arguments);
            lastTime = Date.now();
        }
    };
}

let throttledProcess = throttle(process, 1000);
$(window).mousemove(throttledProcess);
```
- Здесь движение мыши генерирует множество событий mousemove, тогда как оригинальная функция process() вызывается лишь раз в секунду
