# Component

## Информация

::: tip Определение

- **VFC** - тип React для функционального компонента без children

:::

::: warning

- `React.VFC` устарел: с React 18 `React.FC` тоже не содержит children, вместо `React.VFC` используется `React.FC`

:::

## Props

- Пропсы описываются через _interface_
- `React.FC<>` - функциональный компонент

<v-two :title="['Есть props', 'Нет props']">
<template #first>

```tsx
export interface IAppProps {
  title: string;
  count: number;
}

const App: React.FC<IAppProps> = (props) => {
  const { title, count } = props;
  return <div>...</div>;
};

const App: React.FC<IAppProps> = ({ title, count }) => {
  return <div>...</div>;
};
```

</template>
<template #last>

```ts
const App: React.FC = () => {
  //
};
```

</template>
</v-two>

## React Component

```ts
interface IApp {
  Component: React.ReactNode; // Можно добавить как <>{Component}</>
  Component: React.ComponentType; // Можно добавить как <Component />
  Component: React.FC<T>; // Можно использовать для HOC при передаче FC
}
```

### Передача Component через props

**1. Вызываем `<Foo />` и пробрасываем в props другой компонент**

```tsx
export const App: React.FC = () => {
  return <Foo component={Bar} />;
};
```

**2. Вызываем переданный компонент `<Bar />`**

```tsx
export interface IFooProps {
  component: React.ComponentType<IBarProps>;
}

const Foo: React.FC<IFooProps> = (props) => {
  return <props.component data="Hello" />;
};
```

**3. Простой компонент `<Bar />`**

```tsx
export interface IBarProps {
  data: string;
}

const Bar: React.FC<IBarProps> = (props) => {
  return <h1>{props.data}</h1>;
};
```
