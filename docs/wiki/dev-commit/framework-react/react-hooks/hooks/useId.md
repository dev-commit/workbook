# Хук useId()

::: info
https://react.dev/reference/react/useId
:::

    Создание уникальных IDs, которые могут быть переданы в accessibility attributes
    
Уникальная строка ID, связанная с этим конкретным вызовом useId в этом конкретном компоненте

```js
import { useId } from 'react';

const App = () => {
    const passwordHintId = useId();
    // ...
}
```
