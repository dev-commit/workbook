# Never

- Если функиця возвращает ошибку
- Если функция не завершает свое выполнение

```js
function throwError(message: string): never {
	throw new Error(message)
}
```

```js
function infinite(): never {
	while(true) {}
}
```
