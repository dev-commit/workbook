# Рефы и DOM

## Перенаправление рефов

::: danger

**`React.forwardRef (props, ref)`** - получить ref и передать его в дочерний DOM-элемент компонента

> - `props` - пропсы
> - `ref` - существует только в том случае, если создавать компонент через функцию React.forwardRef. Обычные функциональные или классовые компоненты не получают ref в качестве аргумента или пропа

:::

::: tip

- **Перенаправление рефов** позволяет автоматически передавать реф компонента одному из его дочерних элементов
  :::
- Перенаправление рефов позволяет взять ref из атрибутов компонента, и передать («перенаправить») его одному из дочерних компонентов
- **Применение**: для написания библиотек

## Колбэк-рефы

::: tip

- **Колбэк-рефы** - предоставляет более полный контроль над их присвоением и сбросом
  :::

- React вызовет ref колбэк с DOM-элементом при монтировании компонента, а также вызовет его со значением null при размонтировании. Рефы будут хранить актуальное значение перед вызовом методов `componentDidMount` или `componentDidUpdate`

```js{7-14}
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.domElement = null;
    this.setDomElement = (element) => {
      this.domElement = element;
    };
    this.handleClick = () => {
      if (this.domElement) {
        console.log(this.domElement);
      }
    };
  }
  componentDidMount() {
    this.handleClick();
  }
  render() {
    return (
      <div>
        <div ref={this.setDomElement}>DOM element</div>
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}
```
