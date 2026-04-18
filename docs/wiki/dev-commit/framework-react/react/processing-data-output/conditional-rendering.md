# Условный рендеринг

## Переменные-элементы

```js
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { status: true };
	}
	render() {
		const status = this.state.status;
		let text;
		if (status) {
			text = <h2>Yes</h2>;
		} else {
			text = <h2>No</h2>;
		}
		return (text);
		}
};
```

## Встроенные условия if с логическим оператором &&

- Можно внедрить любое выражение в JSX, заключив его в фигурные скобки. Это правило распространяется и на логический оператор && языка JavaScript, которым можно удобно вставить элемент в зависимости от условия
- В JavaScript выражение true && expression всегда вычисляется как expression, а выражение false && expression - как false

```js
render() {
	return (
		<div>
			{this.state.status && <h2>Yes</h2>}
		</div>
	);
}
```

## Встроенные условия if-else с тернарным оператором

- Можно использовать тернарный оператор condition ? true : false

### Вариант 1

```js
render() {
	return (
		<div>
			{this.state.status ? <h2>Yes</h2> : <h2>No</h2>}
		</div>
	);
}
```

### Вариант 2

```js
render() {
	return (
		<div>
			{this.state.status ? (
				<h2>Yes</h2>
			) : ( 
				<h2>No</h2>
			)}
		</div>
	);
}
```

## Предотвращение рендеринга компонента

- В редких случаях может потребоваться позволить компоненту спрятать себя, хотя он уже и отрендерен другим компонентом. Чтобы этого добиться, верните null вместо того, что обычно возвращается на рендеринг
- Сам факт возврата null из метода render компонента никак не влияет на срабатывание методов жизненного цикла компонента. Например, componentDidUpdate будет всё равно вызван

```js
render() {
	if (!this.state.status) {
		return null;
	}
	return (<h2>Yes</h2>);
}
```
