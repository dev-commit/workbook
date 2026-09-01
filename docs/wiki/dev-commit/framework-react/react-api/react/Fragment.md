# Фрагменты

::: tip

- **Фрагменты** - позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM
  :::

- Объявляются через `<React.Fragment>` или через `<>`

```jsx
// Полная запись
const App = () => {
  return (
    <React.Fragment>
      <p>Привет</p>
      <p>Мир</p>
    </React.Fragment>
  );
};
```

```jsx
// Сокращенная запись
const App = () => {
  return (
    <>
      <p>Привет</p>
      <p>Мир</p>
    </>
  );
};
```

## Фрагменты с ключами

- Фрагменты, объявленные с помощью `<React.Fragment>`, могут иметь ключи. Например, их можно использовать при создании списка определений, преобразовав коллекцию в массив фрагментов
- `key` - единственный атрибут, допустимый у `Fragment`
- _Сокращенная запись_ не поддерживает ключи или атрибуты

```js
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { id: 1, name: "Tony" },
        { id: 2, name: "Steve" },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.arr.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
```
