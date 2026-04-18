# Структура реализации

<!-- <img src="../@img/react-redux-dispatch.png" width="1000px"/> -->

### 1. View

- Нажали на кнопку
- Срабатывает store.dispatch(setName('Tony'))
- Через mapDispatchToProps()

```js
store.dispatch(setName('Tony'));
```

### 2. Action

```js
const setName = name => ({
	type: 'NAME',
	payload: name
});
```

### 3. Middleware

```js
const starterMiddleware = store => next => action => {
    // action           => { type: "NAME", payload: "Tony" }  - Action
    // state.getState() => { reducerStarter: { name: "" } }   - Prev State

    // Вызывается Reducer
    const newState = next(action);
    
    // state.getState() => { reducerStarter: { name: "Tony" } }   - New State

    return newState;
}
```

### 4. Reducer

- Вызывается из Middleware при next(action)

```js
const reducerStarter = (state, action) => {
    switch (action.type) {
        case 'NAME':
        	return {
        		...state,
        		name: action.payload
        	}
        default: return state;
    }
};
```

### 5. View

- Срабатывает store.getState()
- Через mapStateToProps

```js
const AppRedux = ({ reduxStarterData }) => {
    //
}
const mapStateToProps = state => ({
	reduxStarterData: state.reducerStarter
})
const mapDispatchToProps = {
    setName
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRedux);
```
