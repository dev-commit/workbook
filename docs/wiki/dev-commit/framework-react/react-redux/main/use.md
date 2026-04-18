# React-Redux

## 1. PROVIDER

```js
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

## 2. STORE

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

## 3. REDUCERS

```js
import { combineReducers } from 'redux';
import reducerStarter from './reducer-starter';

export default combineReducers({
    reducerStarter
});
```

```js
import { NAME } from '../actionTypes';

const initialState = {
    name: ''
};

const reducerStarter = (state = initialState, action) => {
    switch (action.type) {
        case NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
};

export default reducerStarter;
```

## 4. ACTIONS (ACTIONS CREATOR)

```js
import { NAME } from './actionTypes';

// возвращает объект
export const setName = (name) => ({
    type: NAME,
    payload: name
});

// возвращает функцию (redux-thunk)
export const setName = (name) => (dispatch) => {
	dispatch({
		type: NAME,
		payload: name
	})
};
```

## 5. COMPONENT

App.js#### Connect

```js
import React from 'react';
import {connect} from 'react-redux';
import { setName } from '../../redux/actions';

const App = ({ name, setName }) => {
	return (
		<>
            <h1>{name}</h1>
			<button onClick={() => setName('Jack')}>
				Name Jack
			</button>
		</>
	);
}

const mapStateToProps = state => ({name: state.reducerStarter.name
})
const mapDispatchToProps = {setName}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
```

#### Hooks

```js
import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { setName } from '../../redux/actions';

const App = () => {
    constdispatch= useDispatch();
    constname= useSelector(state => state.reducerStarter.name);

	return (
		<>
            <h1>{name}</h1>
			<button onClick={() => dispatch(setName('Jack'))}>
				Name Jack
			</button>
		</>
	);
}

export default App;
```

## 6. ACTION TYPES

```js
export const NAME = 'NAME';
```
