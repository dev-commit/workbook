# Основы

- Если функция ничего не принимает и не возвращает, то можно указать voidFunction - это готовый алиас у TS
- voidFunction тоже самое что () => void
- Если же тип есть, то его нужно описывать

### 1. Функция НЕ возвращает значение

- void - функция ничего не вернет

```js
const foo = (name: string): void => {
	//
}
```

### 2. Функиция возвращает значение

```js
// Возвращает number
const foo = (name: string): number => {
	return 1;
}
```

```js
// Возвращает объект
type TReturn = {
	name: boolean;
};

export const foo = (): TReturn => {
	return {
		name: true,
	};
};}
```

### Дополнительно

```js
// Можно не использовать_nameвнутри foo()
const foo = (_params: string) => {
	//
}
```
