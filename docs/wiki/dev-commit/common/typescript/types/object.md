# object

- Тип для объектов можно задавать через interface или type

```js
interface IUser {
    name: string;
    age: number;
}

const user: IUser = {
	name: 'Tony',
	age: 23
}
```

## Примеры

### Перебор в цикле

```js
const data: object = {
	query,
	status,
};

Object.keys(data).forEach((keyFilter) => {
	const value = data[keyFilter as keyof {}];
	const value = data[keyFilter as keyof Object];
	const value = data[keyFilter as keyof typeof data];
});
```
