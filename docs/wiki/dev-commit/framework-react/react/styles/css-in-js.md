# CSS in JS

::: info

- https://cssinjs.org/
- https://www.styled-components.com/
- https://github.com/threepointone/glamor
- https://emotion.sh/docs/introduction
- https://linaria.now.sh/
  :::

### Реализация CSS in JS

```html
<div id="app"></div>
```

```js
const styles = `
    #app {
        width: 200px;
        height: 200px;
        background: yellowgreen;
    }
`;

const stylesElement = document.createElement("style");
stylesElement.appendChild(document.createTextNode(styles));
document.body.appendChild(stylesElement);
```

- Добавление &lt;style&gt; происходит во время монтирования компонента во всех библиотеках, за исключением Linaria, где работа с CSS Custom Properties

```html
<html>
  <head>
    <style>
      #app {
        width: 200px;
        height: 200px;
        background: yellowgreen;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```
