# .then .catch .finally

## .then и .catch

- .then и .catch подписка на изменение промиса
- в .then и .catch передается функция-коллбэк
- .then и .catch возвращают новый промис, поэтому их можно использовать по цепочке

## finally

- Вызов finally вернет Promise, поэтому можно вызвать .then
- В finally нельзя пробросить значение
- finally не должен нести никакого изменения, поэтому then возьмет предыдущее состояние

```js
Promise.resolve(1)
	.then(a => a)
	.finally(a => { console.log(a) }) // "undefined"
```

```js
Promise.reject('a')          // "a"
    .catch(p=>p+'b')         // "ab"
    .catch(p=>p+'с')         // 
    .then(p=>p+'d')          // "abd"
    .finally(p=>p+'e')       // 
    .then(p=>console.log(p)) // (2) "abd" 
console.log('f');            // (1) "f"
```

## Аргументы .then

### 1. Один аргумент

```js
promise
	.then(result => {
        console.log(result);
    })
```

### 2. Два аргумента

- Первый аргумент - в случае успеха
- Второй аргумент - в случае ошибки

#### .then

```js
promise
	.then((result) => { 
		console.log(result); 
	}, (error) => {
		console.log(error);
	})
```

#### .then и .catch

```js
promise
	.then((result) => { 
		console.log(result); 
	})
	.catch((error) => { 
		console.log(error);
	})
```

```js
// передача null первым аргументом
promise
	.then(null, (error) => {
		console.log(error);
	})
```

### 3. Вызванная функция в аргументе

- Вызванная функция в аргументе пропускается

```js
promise.then(functionResolve())
```
