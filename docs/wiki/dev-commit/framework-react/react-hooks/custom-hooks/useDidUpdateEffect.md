# useDidUpdateEffect()

- Данные: useEffect в примере будет вызван на как при Монтировании, так и при Обновлении. По итогу в console.log будет 2 записи "useEffect"
- Задача: выполянть код в useEffect только при обновлении (в примере должна быть 1 запись "useEffect")

```js
import React, { useState, useEffect } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    // Выполнится при монтировании и при обновлении
    useEffect(() => {
        console.log("useEffect");
    }, [count]);

    return null;
};
```

### Реализация

```js
import React, { useEffect, useRef } from "react";

// Выполнится только при обновлении
export const useDidUpdateEffect = (callback, deps) => {
    const didMountRef = useRef(false);

    useEffect(() => {
        didMountRef.current && callback();
        didMountRef.current = true;
    }, deps);

    return true;
};
```

### Использование

```js
import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);useDidUpdateEffect(
        () => console.log("useDidUpdateEffect"),
        [count]
    );

    return null;
};
```
