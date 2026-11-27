# Children

## Базовый пример

- До React 18 не требовалась дополнительная типизация для _children_ в _interface_: `React.FC` сам добавлял `children` в props
- _children_ просто достается из _props_

::: warning

- С React 18 `React.FC` не добавляет `children` в props: их нужно описать в _interface_ (`children?: React.ReactNode`) или обернуть тип в `React.PropsWithChildren<IAppProps>`

:::

```tsx
export interface IAppProps {
  title: string;
  count: number;
}

const App: React.FC<IAppProps> = (props) => {
  const { title, count, children } = props;
  return <div>...</div>;
};
```

## Возможное описание типов

```ts
interface Props {
  children: JSX.Element;
  children: React.ReactNode;
}
```
