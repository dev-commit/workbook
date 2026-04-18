# Установка и настройкаReact 18

## Установка

npm install react react-dom

## Приложение

#### React 18

```js
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
```

#### React 17

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
```
- createRoot, и hydrateRoot принимают новый параметр onRecoverableError, на случай, если нужно получать уведомления, когда React восстанавливается после ошибок во время рендеринга или гидратации для ведения журнала

## Приложение SSR

- Для SSR необходимо обновить hydrate до hydrateRoot

#### React 18

```js
import { hydrateRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = hydrateRoot(container, );
```

#### React 17

```js
import { hydrate } from 'react-dom';

const container = document.getElementById('app');
hydrate(, container);
```
