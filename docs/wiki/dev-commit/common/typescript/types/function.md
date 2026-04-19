# function

#### Описание

```js
type Fields = {
	onClick1: Function;
	onClick2: VoidFunction;
	onClick3: () => void;
	onClick4: (cn: string) => void;
	onClick5: (cn: string, isOpen?: boolean) => boolean;
};
```

#### Вызов

```js
const a: Fields = {
    onClick1: () => {},
    onClick2: () => {},
    onClick3: () => {},
    onClick4: (cn) => {},
    onClick5: (cn, isOpen) => { return true },
}
```
