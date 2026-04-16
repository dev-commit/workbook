# Геттеры и сеттеры

```js
function User() {
    const count = 0;
	this.counter = function(i) {
        // вызов без параметра, значит режим геттера, возвращаем свойство
        if (!arguments.length) return count;
        count = i;
    }
}

const user = new User();
user.counter(77); 
user.counter(); // => 77
```
