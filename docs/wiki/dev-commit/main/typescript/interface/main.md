# Основы

- Тип для объектов или классов, в котором указыается какие поля должны присутствовать у этих объектов

```js
interface Rect {
	readonly id: string // только для чтения
	color?: string      // необязательный параметр
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id: '1',
	size: {
		width: 20,
		height: 30
	},
	color: '#ccc' // можно не задавать
}
```

```js
// приведение объекта к типу
const rect = {} as Rect // новая запись
const rect = <Rect>{}   // старя запись
```
