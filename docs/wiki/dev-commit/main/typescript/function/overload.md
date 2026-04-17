# Перегрузка функций

- Можно встретить в библиотеках: Lodash, rxjs

```js
interface MyPosition {
	x: number | undefined
	y: number | undefined
}
interface MyPositionWithDefault extends MyPosition {
	default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
	if (!a && !b) {
		return { x: undefined, y: undefined }
	}

	if (a && !b) {
		return { x: a, y: undefined, default: a.toString() }
	}
	
	return { x: a, y: b }
}

position()     // { x: undefined, y: undefined }
position(1)    // { x: 1, y: undefined, default: '1' }
position(1, 2) // { x: 1, y: 2 }
```
