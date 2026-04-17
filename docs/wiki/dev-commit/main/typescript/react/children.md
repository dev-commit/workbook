# Children

## Базовый пример

- Обычно не требуется дополнительная типизация для children в interface
- children просто достается из props

```js
export interface IAppProps {
	title: string;
	count: number;
}

const App: React.FC<IAppProps> = props => {
	const { title, count, children } = props;
	return ...;
}
```

## Возможное описание типов

```js
inperface Props {
	children: JSX.Element;
	children: React.ReactNode;
}
```
