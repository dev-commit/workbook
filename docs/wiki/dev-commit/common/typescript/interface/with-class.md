# Взаимодействие с классами

```js
interface IClock {
	time: Date,
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date()
	
	setTime(date: Date): void {
		//
	}
}
```
