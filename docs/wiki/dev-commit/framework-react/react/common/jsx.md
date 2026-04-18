# JSX

- Каждый JSX-элемент - это просто синтаксический сахар для вызова React.createElement(component, props, ...children). Так что всё, что вы можете сделать при помощи JSX, может быть сделано на чистом JavaScript

## Особенности

- null, undefined, true, false игнорируются
- object нельзя использовать

```js
const arr = [];
{arr.length && <Component />} // => 0
!!arr.length && <Component />
```

## Тернарные операторы

```html
{active
	? <Typography>Yes</Typography>
	: <Typography>No</Typography>
}
```

```html
{active
	? (
		<Typography>
			Yes
		</Typography>
	) : (
		<Typography>
			No
		</Typography>
	)
}
```

```js
return (
    <>
        {isMobile
            ? (<h1>Code Mobile</h1>)
            : (<ActivityFormPC
                <h1>Code PC</h1>
            />)
        }
    </>
);
```

## Установка babel

```bash
npm init -y                                                 # инициализация
npm i babel-cli@6 babel-preset-react-app@3                  # babel
npx babel --watch src --out-dir . --presets react-app/prod  # наблюдение за директорией src
```

## Render

```html
<div id="root"></div>
```

#### jsx

```js
const element = <h2>Hi</h2>;
ReactDOM.render(
	element, 
	document.getElementById('root')
);
```

#### js

```js
const element = React.createElement('h2', null, 'Hi');
ReactDOM.render(
	element, 
	document.getElementById('root')
);
```

## Варианты

### Переменные

```js
// переменная
const name = 'Tony';
const element = <h2>Hi, {name}</h2>;
```

```js
// чтобы использовать строковый литерал в качестве атрибута, используются кавычки
const element = <div tabIndex="0"></div>;
```

```js
// чтобы указать JavaScript-выражение в качестве атрибута, используются фигурные скобки
const path = '../img/1.png';
const element = <img src={path}></img>;
```
- Не ставьте кавычек вокруг фигурных скобок, когда используете JavaScript-выражение в атрибуте. Следует либо применить кавычки (для строковых литералов), либо фигурные скобки (для выражений), но не то и другое вместе
- Поскольку JSX ближе к JavaScript чем к HTML, React DOM использует стиль именования camelCase для свойств вместо обычных имён HTML-атрибутов. Например, class становится className в JSX, а tabindex становится tabIndex

### Результат вызова JavaScript-функции

```js
function getName() {
	return 'Tony';
}
const element = <h2>Hi, {getName()}</h2>;
```
- При разбитии JSX на несколько строк рекомендуется заключать всё выражение целиком в круглые скобки, чтобы избежать проблем, связанных с автоматической вставкой точек с запятой

```js
const element = (
	<h2>
		Hi
	</h2>
);
```

### Использование внутри выражений

- После компиляции каждое JSX-выражение становится обычным вызовом JavaScript-функции, результат которого - объект JavaScript
- Из этого следует, что JSX можно использовать внутри выражений if и циклов for, присваивать переменным, передавать функции в качестве аргумента и возвращать из функции

```js
function getGreeting(admin) {
	if (admin) {
		return <h2>Hello</h2>;
	}
	return <h2>Bye</h2>;
}
```

## JSX предотвращает атаки, основанные на инъекции кода

- Данные, введённые пользователем, можно безопасно использовать в JSX
- По умолчанию React DOM экранирует все значения, включённые в JSX перед тем как отрендерить их. Это гарантирует, что вы никогда не внедрите чего-либо, что не было явно написано в вашем приложении. Всё преобразуется в строчки, перед тем как быть отрендеренным. Это помогает предотвращать атаки межсайтовым скриптингом (XSS).

```js
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>; // этот код безопасен
```

## JSX представляет собой объекты

- Babel компилирует JSX в вызовы React.createElement()

#### js (babel)

```js
const element = (
	<h1 className="greeting">
		Hello, world!
	</h1>
);
```

#### js

```js
const element = React.createElement(
	'h1',
	{className: 'greeting'},
	'Привет, мир!'
);
```
- React.createElement() проводит некоторые проверки с целью выявить баги в коде, но главное — создаёт объект похожий на такой
- Эти объекты называются React-элементами. Можно сказать, что они описывают результат, который мы хотим увидеть на экране. React читает эти объекты и использует их, чтобы конструировать и поддерживать DOM

```js
// этот код несколько упрощён
const element = {
	type: 'h1',
	props: {
		className: 'greeting',
		children: 'Привет, мир!'
	}
};
```

## Особенности тегов

```html
<input aria-label={} />    <!-- aria-label -->
<label htmlFor=""></label> <!-- for -->
```
