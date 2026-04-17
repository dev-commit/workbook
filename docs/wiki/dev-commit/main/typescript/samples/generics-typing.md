# Типизация через Дженерики

- Задача: Типизировать функцию customMap

```js
function customMap<T, Z>(arr: T[], callback: (item: T, index?: number) => Z): Z[] {
	return arr.map(callback);
}

console.log(
	customMap([1, 2, 3, 4], (item) => {
		// Тип возвращаемого значения неизвестен
		return item + "3";
	});
)
```
