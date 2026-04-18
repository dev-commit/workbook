# Структура классовых компонентов

- Один компонент App находится на самом верху
- Существует два типа «модели» данных: пропсы this.props и состояние this.state

```js
import React, {Component} from 'react';

export default class App extends Component {Конструктор
	constructor(props) {
		super(props);
		this.state = {
			name: 'Tony'
		};
	}
	Методы
	changeName(name) {
		// синхронно
		this.setState({
			name: name
		});
		// асинхронно
		this.setState((state, props) => ({
			info: state.name + props.age
		}));
	}
	// обработчик события
	handleClick = () => {
		let name = this.state.name;   // обращение к свойству
		this.changeName('Jack');      // обращение к методу
        this.info = 'Start Variable'; // новое свойство (не видно в render)
	}
	Методы жизненного цикла
	componentDidMount()    { ... }
	componentWillUnmount() { ... }
	componentDidUpdate()   { ... }
	Рендер
	render() {
		return (
			<h2>
				<ComponentA param="data" />
				{this.state.name}
				{this.props.age}
				<button onClick={this.handleClick}>Ok</button>
			</h2>
		);
	}
	}
```

```js
ReactDOM.render(
	<App age="25" />,
	document.getElementById('root')
);
```

```html
<div id="root"></div>
```

## Структура проекта

<!-- <img class="inline" src="../@img/tree3.png" width="200px"/> -->

<!-- <img class="inline" src="../@img/tree2.png"/> -->

<!-- <img class="inline" src="../@img/tree1.png"/> -->

## Пример структуры проекта

```html
<div id="root"></div>
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));
```

```js
import React from 'react';
import logo from '../../assets/logo.svg';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<img src={logo} />
			</div>
		);
	}
}
```
