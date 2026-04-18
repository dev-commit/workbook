# useLogger()

### Реализация

```js
import React, { useState, useEffect } from 'react';

export const useLogger = (value) => {
	useEffect(() => {
		console.log('Value changed: ', value);
	}, [value]);
}
```

### Использование

```js
const App = () => {
	const [value, setValue] = useState('');useLogger(value);

	const onChange = e => setValue(e.target.value);

	return (
		<>
			<input type="text" value={value} onChange={onChange} />
			<h1>{value}</h1>
		</>
	)
}
```
