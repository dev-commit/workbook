# Компоненты

- **Компоненты** - позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. Их можно складывать вместе и использовать несколько раз
- Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные («пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране
- Принцип единственной ответственности: каждый компонент по-хорошему должен заниматься какой-то одной задачей
- Всегда называйте компоненты с заглавной буквы. Если компонент начинается с маленькой буквы, React принимает его за DOM-тег. Например, &lt;div /&gt; это div-тег из HTML, а &lt;Welcome /&gt; это уже наш компонент Welcome, который должен быть в области видимости

## Виды компонентов

- **Stateful Component** (компоненты с состоянием) - делают что-то с данными и работают со стором

---
- **Stateless Functional Components** (функциональные компоненты без состояния) - получают данные и их отрисовывают

<!-- <img src="../@img/components-type.png" width="650px"/> -->

## Композиция компонентов

- Компоненты могут ссылаться на другие компоненты в возвращённом ими дереве. Это позволяет нам использовать одну и ту же абстракцию - компоненты - на любом уровне нашего приложения
- компонент App может отрендерить компонент Child несколько раз

```js
function App() {
	return (
		<div>
			<Child />
			<Child />
		</div>
	);
}
```

## Классовые компоненты: import React

```js
import React from 'react';
class App extends React.Component { ... }
```

```js
import { Component } from 'react';
class App extends Component { ... }
```

## Классовые компоненты: задание state

- Использование конструктора в компоненте необходимо когда state зависит от props и для нормализации props нужны дополнительные алгоритмы

#### Свойство

```js
class App extends React.Component {
	state = {
	    name: 'Tony'
	}
}
```

#### Конструктор

```js
class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	        name: 'Tony'
	    };
	}
}
```

## Функциональные и классовые компоненты

#### Функциональный

```js
const App = (props) => {
	return <h1>Привет, {props.name}</h1>;
}
// функция получает данные через props
// возвращает React-элемент
```

#### Классовый

```js
class App extends React.Component {
	render() {
		return <h1>Привет, {this.props.name}</h1>;
	}
}
```

## Компоненты с пропсами

#### Классовый компонент

```js
class App extends React.Component {render(){
		return (
			<div>
				<Button name="Кнопка" />
			</div>
		);
	}
}

class Button extends React.Component {render(){
		return <button>{this.props.name}</button>;
	}
}
```

#### Функциональный компонент

```js
const App = () => {
	return (
		<div>
			<Button name="Кнопка" />
		</div>
	);
}

const Button = (props) => {
	return <button>{props.name}</button>;
}
```

## Импорт и экспорт

```js
import Header from '../Header';

export default class App extends React.Component { ... }

class App extends React.Component { ... }
export default App;
```

## Классовые компоненты на jsx и js

#### jsx

```js
class App extends React.Component {
	render() {
		return <button>Кнопка</button>;
	}
}
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
```

#### js

```js
const e = React.createElement;
class App extends React.Component {
	render() {
		returne('button', null, 'Кнопка');
	}
}
ReactDOM.render(e(App),
	document.getElementById('root')
);
```

## Структура классового компонента

```js
Component =  {
    state: Object
    props: Object,
    context: undefined,
    refs: Object,
    updater: {
        function isMounted()
        function enqueueForceUpdate()
        function enqueueReplaceState()
        function enqueueSetState()
    }
    <constructor>: "Component"
}
```
