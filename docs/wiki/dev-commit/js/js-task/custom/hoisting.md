# Всплытие

## Функция

### #1

```js
var a = 1;

(function() {
    console.log(a); // => undefined
    var a = 2;      // всплывает и инициализируется значением "undefined"
})();

// "function а" имеет максимальный приоритет, но "var a" проинициализирована
// поэтому "a == 1"
function a() {
    console.log(this);
}

a.call(null); // => Uncaught TypeError: a.call is not a function
```

### #2

```js
(function () {
    f(); // 2
    f = function () {
    	console.log(1);
    };
})();

f(); // 1
var f = 10;
f(); // f is not a function

function f () {
	console.log(2);
}
```

### #3

```js
let a = 1;

function b() {
    // перезаписывается не глобальная переменная, а локальная функция
    a = 10;
    return 20;
    // функция всплывает
    function a() {}
}

b();

console.log(a); // 1
```

### #4

```js
var x = function a(arg) {
    console.log(x === arg);
}

x(a); // => Uncaught ReferenceError: a is not defined
```

### #5

```js
var a = 5;

function foo() {
    if (a) {
        console.log(a);
        var a = 10;
    } else {
        console.log('No');
    }
}

foo(); // => "No"
```

## Массив

### Значение массива

```js
var a = [];
function clear(arr) {
    arr.push(2);
    arr = null;
}
clear(a);
console.log(a); // [2]
```

## Временная Dead Zone

```js
function foo(a) {
    if (a > 0) {
        // a во временной dead zone
        let a = a + 10;
        return a;
    }
    return a;
}

console.log(foo(20));

// => ReferenceError: Cannot access 'a' before initialization
```

## this

#### comment

```js
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a); // => 1
```

#### comment

```js
var a = 1;
function b() {
    a = 10;
    return;
    let a;
}
b();
console.log(a); // => Uncaught ReferenceError: Cannot access 'a' before initialization
```

## Переменная

```js
var a = 5;
function someFunction() {
    // "3" запишется не в глобальную, а в локальную, потому что она всплыла
    a = 3;

    // условие не выполнится но "a" всплывет
    if (false) {
        var a = 10;
    }
}

someFunction();
console.log(a); // => 5
```
