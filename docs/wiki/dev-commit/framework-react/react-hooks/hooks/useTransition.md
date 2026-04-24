# Хук useTransition()

::: info

- https://react.dev/reference/react/useTransition
  :::

::: danger

**`useTransition()`** - позволяет обновлять состояние, не блокируя UI

> - `props` - props
> - _return_ - массив из двух элементов: _isPending_ флаг, указывающий, есть ли ожидающий переход; _startTransition_ функция, позволяющая отметить обновление состояния как переход

:::

::: tip Паттерн

```js
import { useTransition } from "react";

const App = () => {
  const [isPending, startTransition] = useTransition();
  // ...
};
```

:::
