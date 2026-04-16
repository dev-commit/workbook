# Каррирование

## #1

```js
function sum(a, b) {
	return a + b;
}

function mul(a, b) {
    return a * b;
}

function myFunc(func) {
    return function(a) {
    	return function(b) {
      		return func(a, b);
      	}
    }
}

// const myFunc = func => (a) => (b) => func(a, b);

console.info(myFunc(sum)(2)(3)); // => 5
console.info(myFunc(mul)(2)(3)); // => 6
```
