# Порталы

    порталы позволяют рендерить дочерние элементы в DOM-узел, который находится вне DOM-иерархии родительского компонента
    
любой React-компонент, который может быть отрендерен, такой как элемент, строка или фрагмент
DOM-элемент

- Применение - когда в родительском компоненте заданы стили overflow: hidden или z-index, но вам нужно чтобы дочерний элемент визуально выходил за рамки своего контейнера. Например, диалоги, всплывающие карточки и всплывающие подсказки
- Событие, сгенерированное изнутри портала, будет распространяться к родителям в содержащем React-дереве, даже если эти элементы не являются родительскими в DOM-дереве

---
- Обычно, когда вы возвращаете элемент из рендер-метода компонента, он монтируется в DOM как дочерний элемент ближайшего родительского узла
- Но иногда требуется поместить потомка в другое место в DOM

```js
render() {
	// React *не* создаёт новый div. Он рендерит дочерние элементы в `domNode`.
	// `domNode` — это любой валидный DOM-узел, находящийся в любом месте в DOM.
	return ReactDOM.createPortal(
		this.props.children,
		domNode
	);
}
```

## Пример

```js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	render() {
		return (<Child />);
	}
}

class Child extends Component {
	render() {
		return ReactDOM.createPortal(
			<div>Portal</div>,
			document.getElementById('portal')
		);
		}
}

ReactDOM.render(<App />, document.getElementById('root'));
```

```html
<div id="root"></div>
<div id="portal"></div>
```
