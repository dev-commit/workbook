# JSX

## Информация

- Каждый JSX-элемент - это просто синтаксический сахар для вызова `React.createElement(component, props, ...children)`. Так что всё, что вы можете сделать при помощи JSX, может быть сделано на чистом JavaScript
- Поскольку JSX ближе к JavaScript чем к HTML, React DOM использует стиль именования camelCase для свойств вместо обычных имён HTML-атрибутов. Например, class становится className в JSX, а tabindex становится tabIndex

## Варианты

```js
// Переменная
const name = "Tony";
const element = <h2>Hi, {name}</h2>;
```

```js
// Чтобы использовать строковый литерал в качестве атрибута, используются кавычки
const element = <div tabIndex="0"></div>;
```

```js
// Чтобы указать JavaScript-выражение в качестве атрибута, используются фигурные скобки
const path = "../img/1.png";
const element = <img src={path}></img>;
```
