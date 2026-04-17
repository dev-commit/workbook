# Примеры

- После запуска теста, создается файл ./__snapshots__/App.test.js.snap в котором находится HTML-код компонента App
- Если изменить HTML-код компонента App, то тест не пройдёт
- Файл теста обычно помещается в директорию __test__ и называется App.test.js

### Глобальное подключение в./src/setupTests.js

```js
import '@testing-library/jest-dom/extend-expect';
```

### Test

```js
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from './App';

// для рендера одного компонента несколько раз
afterEach(cleanup);

it('Get Snapshot', () => {
    const { asFragment } = render(<App label="My Label" />);
    expect(asFragment()).toMatchSnapshot();
});

it('Check Element', () => {
    const { getByTestId, getByText } = render(<App label="My Label" />);

    // элемент содержит проп data-testid="headerId"
    const a1 = expect(getByTestId('headerId'));
    // элемент содержит проп data-testid="headerId", получаем атрибут "title"
    const a2 = expect(getByTestId('headerId').getAttribute('title'));
    // элемент содержит текстовый контент (полный, регистрозависимый)
    const a3 = expect(getByText('My Label'));
    // элемент содержит текстовый контент (допускается часть)
    const a4 = expect(getByText(/label/i));

    // элемент содержит часть текстового контента (регистрозависимый)
    a1.toHaveTextContent('My');
    // элемент содержит часть текстового контента (регистроНЕзависимый)
    a1.toHaveTextContent(/my/i);
    // элемент создержит className="headerClass"
    a1.toHaveClass('headerClass');
    // элемент toBeInTheDocument
    a1.toBeInTheDocument();
    // атрибут равен "Hello"
    a2.toBe('Hello');
});
```

### Component

```js
import React from 'react';

const App = ({ label }) => (
    <header>
        <h1
            data-testid="headerId"
            className="headerClass"
            title="Hello"
        >
            {label}
        </h1>
    </header>
);

export default App;
```

### Snapshot

```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Get Snapshot 1`] = `
<DocumentFragment>
    <header>
        <h1
            class="headerClass"
            data-testid="headerId"
            title="Hello"
        >
            My Label
        </h1>
    </header>
</DocumentFragment>
`;
```
