# usePathname

## Информация

::: info

- https://nextjs.org/docs/app/api-reference/functions/use-pathname

:::

::: danger

**`usePathname()`** - Client Component hook, позволяющий получить путь текущего URL-адреса

:::

- usePathname - Client Component hook, поэтому в файле нужно использовать `"use client"`

## Пример

```jsx
"use client";

import { usePathname } from "next/navigation";

const App = (props) => {
  const pathname = usePathname();

  return <p>Current pathname: {pathname}</p>;
};
```
