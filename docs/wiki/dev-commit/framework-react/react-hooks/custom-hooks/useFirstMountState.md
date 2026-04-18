# useFirstMountState()

### Реализация

```js
import React, { useRef, useEffect } from 'react';

const useFirstMountState = (): boolean => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return false;
};

const App = () => {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (!isFirstMount) {
      //
    }
  }, [isFirstMount]);
}
```

### Использование

```js
//
```
