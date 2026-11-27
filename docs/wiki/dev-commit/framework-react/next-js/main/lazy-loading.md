# Lazy Loading

## Информация

::: info

- https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading

:::

## Использование

```jsx
import dynamic from "next/dynamic";

const Header = dynamic(async () => await import("../components/Header"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
```

::: warning

- В App Router опция `ssr: false` работает только в клиентских компонентах (`'use client'`). В серверном компоненте она вызывает ошибку

:::
