# Название обработчиков событий

- **on** - функция внутри компонента. Может приходить из props
- **handle** / **handler** - функции внутри компонента, которые передаются в props другому компоненту

```js
const App = () => {
  // Используется внутри компонента
  const onChange = () => null;

  // Передается в props другого компонента
  const handleClick = () => null;

  return (
    <>
      <input onChange={onChange} />
      <Child onClick={handleClick} />
    </>
  );
};
```

```js
const Child = (props) => {
  // Берется из props
  const { onClick } = props;

  return null;
};
```

## Примеры

- `onClick`, `onButtonClick`
- `onChange`, `onInputChange`
- `handleFiltersApply`, `filtersUpdateHandler`
