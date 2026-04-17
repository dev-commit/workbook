# Наследование интерфейсов

### Наследование от одного интерфейса

#### TS

```js
interface IAnimal {
	name: string;
}
interface ICatextendsIAnimal {
	speed: number;
}
```

#### Usage

```js
const a: ICat = {
	name: 'Tom',
	speed: 10,
}
```

### Множественное наследование

#### TS

```js
interface IAnimal {
	name: string;
}
interface IAction {
	go: () => void;
}
interface ICatextendsIAnimal, IAction {
	speed: number;
}
```

#### Usage

```js
const a: ICat = {
	name: 'Cat',
	speed: 10,
	go: () => null,
}
```
