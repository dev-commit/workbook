# CSS in JS

## Информация

::: info

- https://cssinjs.org/ - JSS
- https://www.styled-components.com/ - Styled Components
- https://github.com/threepointone/glamor - Glamor
- https://emotion.sh/docs/introduction - Emotion
- https://linaria.now.sh/ - Linaria (CSS Custom Properties)

  :::

## Реализация CSS in JS

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

- Добавление `<style>` происходит во время монтирования компонента во всех библиотеках, за исключением Linaria, где работа с CSS Custom Properties

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
