# Тип принимает агрумент

AllowedValues строка

```js
// Объект с ключом "name" и разрешенными значениями "T"
type FieldType<T = string> = {
	name: T;
};

// Разрешенные значения для ключа "name"
type AllowedValues = 'name' | 'age' | 'count';

// Массив объектов
type MyFields = FieldType<AllowedValues>[];

// Результат: массив объетов с разрешенными значениями
const fields: MyFields = [
	{ name: 'name' },
	{ name: 'age' },
	// { name: 'date' }, // error
];
```AllowedValues объект

```js
type AllowedValues = {
	id: string;
	name?: string;
};

const fields: MyFields = [
	{
		name: {
			id: '1',
			name: 'Jack'
		}
	},
];
```
