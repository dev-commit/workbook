# usePathname

::: info
https://nextjs.org/docs/app/api-reference/functions/use-pathname
:::

    Client Component hook, позволяющий получить путь текущего URL-адреса
    

- usePathname Client Component, поэтому в файле нужно использовать "use client"

```js
"use client"

import { usePathname } from 'next/navigation';

const App = (props) => {
    const pathname =usePathname();

	return <p>Current pathname: {pathname}</p>
}
```
