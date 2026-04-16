# Правила обработки return

- При вызове return с объектом, будет возвращён объект, а не this
- При вызове return с примитивным значением, оно будет отброшено и возвращен this

### 1. Возвращает объект

```js
function BigAnimal() {
	this.name = "Мышь";
	return { name: "Годзилла" };  // <-- возвратим объект
}
alert( new BigAnimal().name );  // Годзилла, получили объект вместо this
```

### 2. Возвращает примитивное значение

```js
function BigAnimal() {
	this.name = "Мышь";
	return "Годзилла"; // <-- возвратим примитив
}
alert( new BigAnimal().name ); // Мышь, получили this (а Годзилла пропала)
```

### 3. Возвращает пустое значение

```js
function SmallAnimal() {
	this.name = "Мышь";
	return; // <-- возвращает this
}

alert( new SmallAnimal().name );  // Мышь
```
