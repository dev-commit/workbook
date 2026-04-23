# Свойства-элементы

## Информация

- В prop может передаваться JSX
- В prop может передаваться объект, который представляет из себя React-элемент

## Варианты

### 1. Указание функции

```js
const App = () => {
  return <>{Sample()}</>;
};

const Sample = () => {
  return <h1>Sample</h1>;
};
```

### 2. Указание объекта

```js
const App = () => {
  return <>{element}</>;
};

const element = <h1>Hello</h1>;
```

### 3. Передача в компонент

```js
const App = () => {
  const element = <h1>Hello</h1>;
  return <Child elementObject={element} elementJsx={<h1>Hello</h1>} />;
};

const Child = (props) => {
  return (
    <>
      {props.elementObject}
      {props.elementJsx}
    </>
  );
};
```

### 4. Передача компонета в props

- В React нет никаких ограничений на то, что можно передать в качестве пропсов

```js{4}
// ReactDOM.render
class ComponentParent extends React.Component {
  render() {
    return <ComponentChild small={<ComponentSmall />} />;
  }
}
```

```js
class ComponentSmall extends React.Component {
  render() {
    return <div>ComponentSmall</div>;
  }
}
```

```js
class ComponentChild extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.small}</div>;
  }
}
```
