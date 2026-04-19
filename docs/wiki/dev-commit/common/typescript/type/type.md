# Type

- **Type** - создание собственного типа

## Примитив

```js
type Login = string;
type ID = string | number;

const login: Login = 'admin';
const id1: ID = 42
const id2: ID = 'Hello'
```

## Объект

```js
type Props = {
	name: string;
	onClick: (cn: string, isOpen?: boolean) => boolean;
};

const App = ({ name, onClick }: Props) => {
	onClick('Hello '+name);
}

const Props = {
	name: 'Tony',
	onClick: (cn: string) => {
		console.log(cn); // => "Hello Tony"
		return true;
	}
}

App(Props);
```
