# Методы

```js
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
```
- render - метод рендерит элемент React в DOM и возвращает служебные функции для тестирования компонента.
- fireEvent - метод позволяет запускать события для имитации действий пользователя
- waitFor
- screen

```js
const {
	getByText,
	container,
	asFragment,
} = render(<App />);
```
