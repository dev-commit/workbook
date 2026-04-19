# Абстрактные классы

- Описывают методы, которые будет реализованы у классов-наследников
- Аналогия interface

```js
abstract class Component {
	abstract render(): void
	abstract info(): string
}

class AppComponent extends Component {
	render(): void {
		console.log('Component on render')
	}

	info(): string {
		return 'This is info';
	}
}
```
