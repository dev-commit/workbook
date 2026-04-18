# Хук useTransition()

::: info
https://react.dev/reference/react/useTransition
:::

    Позволяет обновлять состояние, не блокируя UI
    

        Массив ровно из двух элементов:
        1. isPending флаг, указывающий, есть ли ожидающий переход
        2. startTransition функция, позволяющая отметить обновление состояния как переход

```js
import { useTransition } from 'react';

const App = () => {
    const [isPending, startTransition] = useTransition();
    // ...
}
```
