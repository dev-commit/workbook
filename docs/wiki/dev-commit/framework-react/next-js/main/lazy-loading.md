# Lazy Loading

::: info
https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading
:::

```js
import dynamic from "next/dynamic"

const Header = dynamic(async () => await import("../components/Header"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})
```
