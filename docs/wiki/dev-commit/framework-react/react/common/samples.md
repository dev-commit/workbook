# Примеры

## Принудительный перерендеринг

```js
// При измнении key, компонент будет обязательно перерендерен
import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

const App = () => {
	const [label, setLabel] = useState('Hello');
	const [key, setKey] = useState(Date.now());
	const handleClick = () => {
		setLabel('Hello World');
		setKey(Date.now());
	};
	
	return (
		<>
			<TextField key={key} value = '1' variant='outlined' fullWidth label={label}/>
			<button onClick={handleClick}>Change</button>
		</>
	);
};
```
