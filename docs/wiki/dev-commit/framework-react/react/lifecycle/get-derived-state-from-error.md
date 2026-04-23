# getDerivedStateFromError()

::: danger

**`getDerivedStateFromError(error)`** - вызывается после возникновения ошибки у компонента-потомка

> - `error` - ошибка
> - _return_ - значение для обновления состояния

:::

## Пример

```js{8}
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
