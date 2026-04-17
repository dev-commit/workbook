# useState

```js
import { useState } from 'react';

const App = () => {
	const [value, setValue] = useState<number>(23);
	const [value, setValue] = useState<number | string>();
	const [show, setShow]   = useState<boolean>(true);
}
```

### Callback

```js
interface IAppProps {
    setValue: React.Dispatch<React.SetStateAction<string>>;
}
```
