# Комбинация типов

## Расширение типов

```js
type Props = {
	header: string;
} & TabsProps;

type TabsProps = {
	count: number;
};

const obj: Props = {
	header: 'Hello',
	count: 23,
}
```

## Использование одного типа в другом

```js
type Props = {
	header: string;
	obj: TabsProps;
};

type TabsProps = {
	count: number;
};

const obj: Props = {
	header: 'Hello',
	obj: {
		count: 23
	},
}
```
