# Uncontrolled Components

- **Uncontrolled Components** (Неконтролируемые / неуправляемые компоненты) - хранят данные формы в DOM, которые можно читать через ref
- Неуправляемые компоненты опираются на DOM в качестве источника данных и могут быть удобны при интеграции React с кодом, не связанным с React. Количество кода может уменьшиться, правда, за счёт потери в его чистоте. Поэтому в обычных ситуациях рекомендуется использовать управляемые компоненты

#### createRef (класс)

```js
class App extends Component {
	constructor(props) {
		super(props);this.input = React.createRef();}
	handleClick = () => {
		alert(this.input.current.value);
	}
	render() {
		return (
			<div>
				<input type="text"ref={this.input}/>
				<button onClick={this.handleClick}>Ok</button>
			</div>
		);
	}
}
```

#### useRef (функция)

```js
import { useRef } from 'react';

const App = () => {
    const inputRef =useRef(null);

    const handleClick = () => {
        alert(inputRef.current.value);
    }

    return (
        <div>
            <input type="text"ref={inputRef}/>
            <button onClick={handleClick}>Ok</button>
        </div>
    )
}
```

## Значения по умолчанию

- На этапе рендеринга атрибут value полей ввода переопределяет значение в DOM. С неуправляемым компонентом зачастую нужно, чтобы React определил первоначальное значение, но впоследствии ничего не делал с ним. В этом случае необходимо определить атрибут defaultValue вместо value
- Аналогично, &lt;input type="checkbox"&gt; и &lt;input type="radio"&gt; используют defaultChecked, а &lt;select&gt; и &lt;textarea&gt; - defaultValue

```js
render() {
	return (
		<input defaultValue="Tony" type="text" ref={this.input} />
	);
}
```

## Тег поля загрузки файла

- В React &lt;input type="file"&gt; всегда является неуправляемым компонентом, потому что его значение может быть установлено только пользователем, а не программным путём
- Для взаимодействия с файлами следует использовать File API. В примере показано, как создать реф на DOM-узел, чтобы затем получить доступ к файлам в обработчике отправки формы

```js
class FileInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.fileInput = React.createRef();
	}
	handleSubmit(event) {
		event.preventDefault();
		alert(this.fileInput.current.files[0].name);
	}
	render() {
		return (
		<form onSubmit={this.handleSubmit}>
			<input type="file" ref={this.fileInput} />
			<button type="submit">Submit</button>
		</form>
		);
	}
}
```
