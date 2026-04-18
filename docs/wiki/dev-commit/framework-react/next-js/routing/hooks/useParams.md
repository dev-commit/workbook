# useParams

::: info
https://nextjs.org/docs/app/api-reference/functions/use-params
:::

    Client Component hook, который позволяет получить динамические параметры маршрута, заполненные текущим URL-адресом

```js
'use client'
 
import { useParams } from 'next/navigation';

const App = () => {
    const params =useParams();

    // Route -> /shop/[tag]/[item]
    // URL -> /shop/shoes/nike-air-max-97
    // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
    console.log(params);

    return <></>
}
```
