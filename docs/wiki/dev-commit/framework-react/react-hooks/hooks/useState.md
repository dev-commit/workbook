# Хук состояния useState()

::: info
https://react.dev/reference/react/useState
:::

    для использования внутреннего состояния в функциональном компоненте. React будет хранить это состояние между рендерами
    
начальное состояние. Используется только при первом рендере
[currentState, setStateFunction] - возвращает текущее значение состояния и функцию для его обновления

```js
import { useState } from 'react';

const [counter, setCounter] = useState(0);
setCounter(1);
```

## Варианты

### 1. Базовый

- counter - текущее состоение
- setCount(1) - функция для изменения состояния
- useState(0) - начальное состоние "0"

```js
const App = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1)
	}

	return (
		<div>
			{counter}
			<button onClick={increment}>Increment</button>
		</div>
	);
}
```

### 2. Функция-коллбэк в setCounter()

- Хук работает асинхронно
- Должен произойти цикл рендеринга, чтобы counter изменился

```js
const [counter, setCounter] = useState(0);

setCounter(prevCounter => {
	// Если нужно точно основываться на предыдущем состоянии
	// Вернет текущее значение "counter"
	return prevCounter + 1
})

// setCounter(prevCounter => prevCounter + 1)
```

```js
const [counter, setCounter] = useState(0);

const increment = () => {
	setCounter(1);
	setCounter(2);
	setCounter(3); // Установится последнее значение
}
```

#### Неверно

```js
setCounter(counter + 1)
setCounter(counter + 1) // counter остался прежним
```

#### Верно

```js
setCounter(prevCounter => {
	return prevCounter + 1
})
setCounter(prevCounter => {
	return prevCounter + 1
})
```

### 3. State с объектами

```js
setCounter(prev => {
	return {
		...prev,
		title: 'Новое значение'
	}
})
```

```js
const [counter, setCounter] = useState({
	title: 'Счетчик',
	data: Date.now()
})
```
- Если передаем новый объект, то он полностью перезатирает состояние
- В отличие от классового компонента, он не совмещается с существующим

#### Неверно

```js
// Перезатрет "date"
setCounter({ title: 'Новое значение' })
```

#### Верно

```js
setCounter(prev => {
	return {
		...prev,
		title: 'Новое значение'
	}
})
```

### 4. Функция-коллбэк в useState(). Вычисление начального состояния

```js
const calc = () => {
	console.log('Some calculations');
}
```

#### Неверно

```js
const App = () => {
	// calc() вызывается 2 раза при начальном рендеринге
	// calc() вызывается 2 раза при каждом обновлении state
	// т.к. при изменении state заново рендерится компонент
	const [count, setCount] = useState(calc());
}
```

#### Верно

```js
const App = () => {
	// оптимизация
	// 1 раз вычислит значение и больше не будет вызываться 
	// calc() вызывается 2 раза при начальном рендеринге
	// calc() не вызывается при каждом обновлении state
	const [count, setCount] = useState(() => {
		return calc()
	});

}
```

### 5. Объявление нескольких переменных состояния

- Хук состояния можно использовать в компоненте более одного раза
- Синтаксис деструктуризации массивов позволяет по разному называть переменные состояния, которые объявляем при вызове useState. Так как имён этих переменных нет в API useState, React предполагает, что если вы вызываете useState много раз, вы делаете это в одинаковой последовательности при каждом рендере

```js
const App = () => {
	const [age, setAge] = useState(42);
	const [fruit, setFruit] = useState('Банан');
}
```

## СравнениеuseState()иthis.setState

- Не сливает новое и старое состояние вместе
- Состояние может быть объектом

```js
// изменение состояния перерисовывает компонент
1. this.setState({ a: 1 }) -> this.render()
2. useState()
```

## Особенности

```js
// Не работает
if (true) {
	const [counter, setCounter] = useState(0);
}
```

## Переписывание на Хуки

#### prevState

```js
class App extends Component {
	state = {
		open: false,
	}
	handleOpenModal = () => {
		this.setState(prevState => ({
			open: !prevState.open,
		}));
	}
}
```

#### useState

```js
const App = () => {
	const [open, setOpen] = useState(false);
	const handleOpenModal = () => {
		setOpen(!open);
	}
}
```

#### Callback

```js
const App = isContract => {
	this.setState(() => ({
		signed: isContract,
	}), () => this.props.handleChange());
};
```

#### useState

```js
const App = isContract => {
	setSigned(isContract);
	handleChange();
}
```

#### Callback

```js
class App extends Component {
	state = {
		comment: null,
	}
	setCommentSubject = (fio) => {
		this.state({ comment: fio }, () => {
			this.setState({ comment: null });
		})
	}
}
```

#### useState, useEffect

```js
const App = () => {
	const [comment, setComment] = useState();
	const setCommentSubject = (fio) => {
		setComment(fio);
	}
	useEffect(() => {
		comment && setComment(null);
	}, [comment])
}
```
