# useRouter

::: info
https://nextjs.org/docs/app/api-reference/functions/use-router
:::

    Хук позволяет программно изменять маршруты внутри Client Components

```js
"use client"

import { useRouter } from 'next/navigation'

const App = () => {
    const router =useRouter()
    
    // Получить query-параметр "id"
    const id = router.query.id

    const handleClick = () => {
        // Редирект на указанный url
        router.push('/dashboard')
    }

    return (
        <button type="button" onClick={handleClick}>
            Dashboard
        </button>
    )
}

export default App
```
