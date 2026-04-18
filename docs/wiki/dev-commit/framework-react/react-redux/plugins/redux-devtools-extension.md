# redux-devtools-extension

::: info
https://github.com/zalmoxisus/redux-devtools-extension
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru
:::
npm i --save redux-devtools-extension # для работы devtools

## Использование

### Минимальный вариант

```js
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export default createStore(
	rootReducer,
	composeWithDevTools()
);
```

### Вместе с "redux-thunk"

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);
```

### Без "redux-devtools-extension", вместе с "compose"

```js
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
```

### Без "redux-devtools-extension"

- Если найдено расширение, то мы применяем его во второй аргумент createStore, в другом случае он будет undefined

```js
import { createStore } from 'redux';
import rootReducer from './reducers'

// Вынести в переменную
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

export default createStore(rootReducer, devtoolMiddleware);
```
