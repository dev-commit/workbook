# Controlled Components

- **Controlled Components** (Контролируемые / управляемые компоненты) - данные формы обрабатываются React-компонентом. value элемента устанавливается из state компонента
- У элементов формы изначально есть внутреннее состояние
- В HTML элементы формы, такие как &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, обычно сами управляют своим состоянием и обновляют его когда пользователь вводит данные. В React мутабельное состояние обычно содержится в свойстве компонентов state и обновляется только через вызов setState(). Мы можем скомбинировать оба подхода и сделать состояние React-компонента «единственным источником правды». Тогда React-компонент будет рендерить форму и контролировать её поведение в ответ на пользовательский ввод. Значение элемента формы input в этом случае будет контролировать React, а сам элемент будет называться управляемый компонент»

## input, submit

```js
import React, { useState } from 'react'

const App = () => {
	const [value, setValue] = useState('')

	const onChange = e => setValue(e.target.value)

	return (
		<>
			<input type="text" value={value} onChange={onChange} />
			<h1>{value}</h1>
		</>
	)
}
```

```js
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}
	handleChange = (event) => {
		this.setState({value: event.target.value.toUpperCase()});
	}
	handleSubmit = (event) => {
		alert(this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<input type="submit" value="Отправить" />
			</form>
		);
	}
}
```

## textarea

```html
<textarea value={this.state.value} onChange={this.handleChange}></textarea>
```

## select

- Пункт списка «Кокос» выбран по умолчанию из-за установленного атрибута selected. React вместо этого атрибута использует value в корневом теге select. В управляемом компоненте так удобнее, потому что обновлять значение нужно только в одном месте (state)

```js
constructor(props) {
	this.state = {value: 'coconut'};
}
```

```html
<form onSubmit={this.handleSubmit}>
	<select value={this.state.value} onChange={this.handleChange}>
		<option value="lime">Лайм</option>
		<option value="coconut">Кокос</option>
		<option value="mango">Манго</option>
	</select>
	<input type="submit" value="Отправить" />
</form>
```
- В атрибут value можно передать массив, что позволит выбрать несколько опций в теге select

```html
<select multiple={true} value={['Б', 'В']}>
```

## Обработка нескольких элементов input

- Если нужны несколько управляемых элементов input, можно назначить каждому из них атрибут name, что позволит функции-обработчику решать, что делать, основываясь на значении event.target.name

```js
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests: 2
		  };
	}
	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}
	render() {
		return (
			<div>
				<input
					name="isGoing"
					type="checkbox"
					checked={this.state.isGoing}
					onChange={this.handleInputChange}
				/>
				<input
					name="numberOfGuests"
					type="number"
					value={this.state.numberOfGuests}
					onChange={this.handleInputChange}
				/>
			</div>
		);
	}
}
```

### Вычисляемые имена свойств

```js
this.setState({
	[name]: value
});
```

## Значение null управляемого компонента

- Если установить управляемому компоненту проп value, то пользователь не сможет изменить его значение без вашего желания. Если вы установили value, а поле ввода по-прежнему можно редактировать, то, возможно, вы случайно задали value, равный undefined или null
- Пример: изначально заблокированный input становится редактируемым спустя 1с

```js
ReactDOM.render(<input value="Привет" />, mountNode);

setTimeout(function() {
	ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```
