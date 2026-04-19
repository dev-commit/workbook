# Component

- **VFC** - тип React для функционального компонента без children

## Props

- Пропсы описываются через interface
- React.FC&lt;> - функциоанальный компонент

#### Есть props

```js
export interface IAppProps {
	title: string;
	count: number;
}

const App: React.FC<IAppProps> = props => {
	const { title, count } = props;
	return ...;
}

const App: React.FC<IAppProps> = ({ title, count }) => {
	return ...;
}
```

#### Нет props

```js
const App: React.FC = () => {
	//
};
```

## React Component

```js
interface IApp {
	Component: React.ReactNode;     // Можно добавить как<>{Component}<>Component: React.ComponentType; // Можно добавить как<Component />Component: React.FC<T>;         // Можно использовать для HOC при передаче FC
}
```

### Передача Component через props

1. Вызываем &lt;Foo /&gt; и пробрасываем в props другой компонент

```js
export const App: React.FC = () => {
  return <Foocomponent={Bar} />;
};
```2. Вызываем переданный компонент <Bar />```js
export interface IFooProps {
  component: React.ComponentType&lt;IBarProps&gt;;
}

constFoo: React.FC&lt;IFooProps&gt; = props => {
  return &lt;props.component data="Hello" />;
};
```3. Простой компонент <Bar />```js
export interface IBarProps {
  data: string;
}

constBar: React.FC<IBarProps> = props => {
  return <h1>{props.data}</h1>;
};
```
