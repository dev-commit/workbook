# redux-logger

npm i --save-dev redux-logger

```js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

export default createStore(
	rootReducer,
	applyMiddleware(logger)
);
```
