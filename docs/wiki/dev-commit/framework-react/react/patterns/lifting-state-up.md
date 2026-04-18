# Подъём состояния

- **Подъём состояния** - совместное использование состояния, которое достигается перемещением его до ближайшего предка компонентов, которым оно требуется
- Рекомендуется поднимать общее состояние до ближайшего общего предка
- Создания «управляемого» компонента. Точно так же, как DOM-элемент &lt;input&gt; принимает атрибуты value и onChange, так и пользовательский ComponentChild принимает emitHandleParent от своего родителя ComponentParent

```js
class ComponentChild extends React.Component {
	handleChild = () => {
		this.props.emitHandleParent('Jack');
	}
	render() {
		return (
			<button onClick={this.handleChild}>Ok</button>
		);
	}
}
```

```js
class ComponentParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: 'Tony' };
	}
	handleParent = (name) => {
		this.setState({ name: name });
	}
	render() {
		return (
			<div>
				<ComponentChild emitHandleParent={this.handleParent} />
				{this.state.name}
			</div>
		);
	}
}
```
