# Установка и настройка React 18

## Установка

```bash
npm install react react-dom
```

## Приложение

<v-two compare :title="['React 18', 'React 17']">
  <template #first>

```js
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
```

  </template>
  <template #last>

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
```

  </template>
</v-two>

- `createRoot`, и `hydrateRoot` принимают новый параметр _onRecoverableError_, на случай, если нужно получать уведомления, когда React восстанавливается после ошибок во время рендеринга или гидратации для ведения журнала

## Приложение SSR

- Для SSR необходимо обновить `hydrate` до `hydrateRoot`

<v-two compare :title="['React 18', 'React 17']">
  <template #first>

```js
import { hydrateRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = hydrateRoot(container);
```

  </template>
  <template #last>

```js
import { hydrate } from 'react-dom';

const container = document.getElementById('app');
hydrate(, container);
```

  </template>
</v-two>
