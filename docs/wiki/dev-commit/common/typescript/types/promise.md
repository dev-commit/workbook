# promise

#### Описание

```js
type Fields = {
	p1: Promise<void>;
	p2: Promise<string>;
	p3: Promise<boolean>;
	p4: Promise<never>;
};
```

#### Вызов

```js
const a: Fields = {
    p1: new Promise((resolve) => { console.log('Ok') }),
    p2: new Promise((resolve) => { return 'Ok' }),
    p3: new Promise((resolve) => { return true }),
    p4: new Promise((resolve) => { throw new Error('Error') }),
}
```

## `Promise<void>`

- Асинхронная функция возвращает Promise, даже если нет return
- Если нет return, то будет Promise&lt;void&gt;

```js
export const foo = async (): Promise<void> => {
    //
};
```
