# once()

	Создает экземпляр функции, которая должна быть выполнена только один раз
    
функция, которую необходимо выполнить

- Паттерн может быть использован, например, для инициализации, когда нужно быть уверенным в единичном запуске функциональности, даже если сама функция вызвана в нескольких местах

```js
function once(fn){
	let returnValue;
	let canRun = true;
	return function runOnce(){
		if(canRun) {
			returnValue = fn.apply(this, arguments);
			canRun = false;
		}
		return returnValue;
	}
}

let processonce = once(process);
processonce(); // process
processonce(); //
```
- Функция once() возвращает другую функцию - runOnce(), использующую замыкание
- Вызов оригинальной функции осуществляется через передачу this и arguments в метод apply: fn.apply(this, arguments)
