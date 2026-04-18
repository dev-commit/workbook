# usePrevious()

::: info
https://usehooks.com/usePrevious/
:::

### Реализация

```js
import { useEffect, useRef } from 'react';

export const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
```

### Использование

```js
import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);  
    const prevCount =usePrevious(count);

    return (
        <>
            Now: {count}
            Before: {prevCount}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}
```
