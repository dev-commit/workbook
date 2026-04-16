# partial

    Метод, доступный для всех функций
    

- **Частичное применение** - преобразует функцию за счет изменения количества параметров. Это один из примеров движения от общего к частному

```js
Function.prototype.partial = function(...leftArguments){
    let fn = this;
    return function partialFn(...rightArguments){
       let args = leftArguments.concat(rightArguments);
       return fn.apply(this, args);
    }
}

function log(level, message){
    console.log(level  + " : " + message);
}
let logInfo = log.partial("Info");
logInfo("here is a message");

```
- Созданная таким образом logInfo() использует лишь один аргумент message
