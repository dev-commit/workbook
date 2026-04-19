# Динамические ключи объекта

- Интерфейс для объекта, у которого большое количество динамических ключей
- Указание типа ключа [key: string]

```js
interface Styles {
	[key: string]: string
}

const css: Styles  {
	border '1px solid black',
	marginTop: '2px',
	borderRadius: '5px'
}
```
