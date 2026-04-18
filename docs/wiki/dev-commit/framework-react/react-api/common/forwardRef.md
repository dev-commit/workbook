# Рефы и DOM

## Перенаправление рефов

- **Перенаправление рефов** позволяет автоматически передавать реф компонента одному из его дочерних элементов
- Перенаправление рефов позволяет взять ref из атрибутов компонента, и передать («перенаправить») его одному из дочерних компонентов
- Применение: для написания библиотек

    Получить ref и передать его в дочерний DOM-элемент компонента
    
пропсы
существует только в том случае, если создавать компонент через функцию React.forwardRef. Обычные функциональные или классовые компоненты не получают ref в качестве аргумента или пропа

## Колбэк-рефы

- **Колбэк-рефы** - предоставляет более полный контроль над их присвоением и сбросом
- React вызовет ref колбэк с DOM-элементом при монтировании компонента, а также вызовет его со значением null при размонтировании. Рефы будут хранить актуальное значение перед вызовом методов componentDidMount или componentDidUpdate

```js
import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.domElement = null;
		this.setDomElement = element => {
			this.domElement = element;
		}
		this.handleClick = () => {
			if (this.domElement) {
				console.log(this.domElement);
			}
		}
		}
	componentDidMount() {
		this.handleClick();
	}
	render() {
		return (
			<div>
				<div ref={this.setDomElement}>DOM element</div>
				<button onClick={this.handleClick}>Button</button>
			</div>
		);
	}
}
```
