# Хук useId()

::: info

- https://react.dev/reference/react/useId
  :::

::: danger

**`useId()`** - создание уникальных IDs, которые могут быть переданы в accessibility attributes

> - `props` - props
> - _return_ - уникальная строка ID, связанная с этим конкретным вызовом useId в этом конкретном компоненте

:::

::: tip Паттерн

```js
import { useId } from "react";

const App = () => {
  const passwordHintId = useId();
  // ...
};
```

:::
