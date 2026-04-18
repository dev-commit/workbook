# useInput()

### Реализация

```js
import React, { useState } from 'react';

export const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

    const onChange = event => setValue(event.target.value);
	const clear = () => setValue('');

	return {
		bind: { value, onChange },
		value,
		clear
	}
}
```

### Использование

```js
import React from 'react';

const App = () => {
	const input =useInput('');

	return (
		<>
			<input type="text" {...input.bind} />
			<button onClick={() => input.clear()}>Очистить</button>
			<span>{input.value}</span>
		</>
	)
}
```
