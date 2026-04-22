# getDerivedStateFromError()

::: danger

**`name`** - comment

> - `props` - props

:::

    вызывается после возникновения ошибки у компонента-потомка

ошибка
Возвращает значение для обновления состояния

```js
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Запасной UI</h1>;
    }
    return <div>Основной UI</div>;
  }
}
```
