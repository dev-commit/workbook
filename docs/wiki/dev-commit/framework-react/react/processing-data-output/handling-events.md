# Обработка событий

- События в React именуются в стиле camelCase вместо нижнего регистра
- С JSX передается функция как обработчик события вместо строки

#### react jsx

```html
<button onClick={methodName}></button>
```

#### html

```html
<button onclick="methodName()"></button>
```
- В React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault
- В приведённом выше коде e - это синтетическое событие

#### react jsx

```js
function ActionLink() {
	function handleClick(e) {
		e.preventDefault();
		console.log('ok');
	}
	return (
		<a href="#" onClick={handleClick}></a>
	);
}
```

#### html

```html
<a href="#" onclick="console.log('ok'); return false"></a>
```

## Потеря контекста

- Функция получает свой контекст от того, где он вызывается

### 1. Привязка с помощью bind

- При обращении к this в JSX-колбэках необходимо учитывать, что методы класса в JavaScript по умолчанию не привязаны к контексту. Если вы забудете привязать метод this.handleClick и передать его в onClick, значение this будет undefined в момент вызова функции. Это часть того, как работают функции в JavaScript. Обычно, если ссылаться на метод без () после него, например, onClick={this.handleClick}, этот метод нужно привязать

```js
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Tony'
		};
		// привязка обязательна для работы `this` в колбэке
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		// без привязки в constructor не будет работать
		alert(this.state.name);
	}
	render() {
		return (
			<button onClick={this.handleClick}>Ok</button>
		);
	}
}
```

### 2. Эспериментальный синтаксис общедоступных полей классов

- Такой синтаксис доступен в Create React App по умолчанию
- Такой синтаксис гарантирует, что this привязан к handleClick
- Предупреждение: это экспериментальный синтаксис
- Не воссоздает функцию каждый раз, но связывает контекст с компонентом один раз при создании экземпляра класса. Передает ссылку на уже существующий экземпляр

```js
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Tony'
		};
	}
	handleClick = () => {
		alert(this.state.name);
	}
	render() {
		return (
			<button onClick={this.handleClick}>Ok</button>
		);
	}
}
```

### 3. Стрелочные функции в колбэке

- Такой синтаксис гарантирует, что this привязан к handleClick
- Проблема: при каждом рендере компонента создаётся новый колбэк (новый экземпляр), вызывается this.onClick. Чаще всего это не страшно. Однако, если этот колбэк попадает как проп в дочерние компоненты, эти компоненты могут быть отрендерены снова
- Рекомендуется делать привязку в конструкторе или использовать синтаксис полей классов, чтобы избежать проблем с производительностью

```js
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Tony'
		};
	}
	handleClick() {
		alert(this.state.name);
	}
	render() {
		return (
			<button onClick={(e) => this.handleClick(e)}>Ok</button>
		);
	}
}
```

## Передача аргументов в обработчики событий

- В обоих случаях аргумент e, представляющий событие React, будет передан как второй аргумент после идентификатора. Используя стрелочную функцию, необходимо передавать аргумент явно, но с bind любые последующие аргументы передаются автоматически

```html
<!-- стрелочные функции -->
<button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
<!-- Function.prototype.bind -->
<button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button>
```
