# Дженерик StringAndOptions

```js
export type BadgeProps = {
	// Некорректно (будет приводить к строке)
	iconPosition?: 'left' | 'right' | string;
	// Корректно
	iconPosition?: StringAndOptions<'left' | 'right'>;
}
```
