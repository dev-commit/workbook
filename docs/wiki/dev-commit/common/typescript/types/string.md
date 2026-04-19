# string

```js
const str: string = 'Hello'
```

#### Описание

```js
type Fields = {
	name1?: string;              // необязательное поле
	name2: string;               // строка
	name3: string[];             // массив строк
	name4: string[] | undefined; // массив строк или undefined
	name5: 'Tony' | 'Jack';      // 'Tony' или 'Jack'
};
```

#### Вызов

```js
const a: Fields = {
    // name1: 'Tony',
    name2: 'Tony',
    name3: ['Tony', 'Jack'],
    name4: undefined,
    name5: 'Tony',
}
```
