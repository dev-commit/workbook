# dangerouslySetInnerHTML

- Свойству innerHTML в DOM браузера соответствует dangerouslySetInnerHTML в React. Как правило, вставка HTML из кода рискованна, так как можно случайно подвергнуть ваших пользователей атаке межсайтового скриптинга.

```js
import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
	let someHtml = '<h1>Привет</h1>';
	return (
		<div dangerouslySetInnerHTML={{__html: someHtml}}></div>
	);
}

ReactDOM.render(<App />, document.getElementById('root')); // => Привет
```
