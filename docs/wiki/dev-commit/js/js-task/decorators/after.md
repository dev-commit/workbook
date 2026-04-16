# after()

	создает вариант функции, которая будет выполнена только после определенного количества вызовов
    
кол-во вызовов, после которых будет выполнена функиция
функция, которую необходимо выполнить

- Функция полезна, например, если должна быть выполнена только по завершению асинхронных операций

```js
function after(count, fn) {
   let runCount = 0;
   return function runAfter() {
      runCount = runCount + 1;
      if (runCount >= count) {
         return fn.apply(this, arguments);        
      }
   }
}

function logResult() { console.log("calls have finished"); }

let logResultAfter2Calls = after(2, logResult);

setTimeout(function logFirstCall() { 
      console.log("1st call has finished"); 
      logResultAfter2Calls();
}, 3000);

setTimeout(function logSecondCall() { 
      console.log("2nd call has finished"); 
      logResultAfter2Calls();
}, 4000);
```
- При помощи after() создается функция logResultAfter2Calls(). Она в свою очередь выполняет logResult() только после второго вызова
