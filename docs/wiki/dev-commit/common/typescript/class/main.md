# Основы

```js
class Typescript {
	version: string

	constructor(version: string) {
		this.version = version
	}

	info(name: string) {
		return `[${name}]: Typescript version is ${this.version}`
	}
}
```

Аналогичные записи#### Короткий вариант

```js
class Car {
	readonly numberOfWheels: number = 4
	constructor(readonly model: string) {}
}
```

#### Длинный вариант

```js
class Car {
	readonly model: string
	readonly numberOfWheels: number = 4

	constructor(theModel: string) {
		this.model = theModel
	}
}
```
