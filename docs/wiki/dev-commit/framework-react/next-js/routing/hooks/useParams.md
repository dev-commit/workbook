# useParams

## Информация

::: info

- https://nextjs.org/docs/app/api-reference/functions/use-params

:::

::: danger

**`useParams()`** - Client Component hook, который позволяет получить динамические параметры маршрута, заполненные текущим URL-адресом

:::

## Пример

```jsx
"use client";

import { useParams } from "next/navigation";

const App = () => {
  const params = useParams();

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params);

  return <></>;
};
```
