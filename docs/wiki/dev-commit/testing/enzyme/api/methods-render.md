# Методы рендеринга

```js
import Enzyme, { shallow, render, mount } from 'enzyme';
```

### 1. shallow

- Не рендерит дочерние компоненты
- Основной метод по работе с тестами
- Работает с React-нодой
- Lifecycle methods: constructor, render, componentDidMount, componentDidUpdate

### 2. render

- Рендерит дочерние компоненты
- Работает с React-нодой
- Lifecycle methods: constructor, render, componentDidMount, componentDidUpdate

### 3. mount

- Рендерит дочерние компоненты
- Нужен на уровне Snapshots, когда не важен Lifecycle
- Работает с DOM-нодой (результат рендера - HTML)
- Lifecycle methods: render
