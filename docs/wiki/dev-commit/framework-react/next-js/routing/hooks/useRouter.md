# useRouter

## Информация

::: info

- https://nextjs.org/docs/app/api-reference/functions/use-router

:::

::: danger

**`useRouter()`** - хук позволяет программно изменять маршруты внутри Client Components

:::

## Пример

```jsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

const App = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Получить query-параметр "id"
  const id = searchParams.get("id");

  const handleClick = () => {
    // Редирект на указанный url
    router.push("/dashboard");
  };

  return (
    <button type="button" onClick={handleClick}>
      Dashboard
    </button>
  );
};

export default App;
```

::: warning

- У `useRouter()` из `next/navigation` нет `router.query` (он был у `useRouter()` из `next/router` в Pages Router). Query-параметры читаются через `useSearchParams()`
- Компонент с `useSearchParams()` на статической странице нужно обернуть в `<Suspense>`: без этого `next build` завершится ошибкой «Missing Suspense boundary with useSearchParams». В режиме разработки ошибки нет

```jsx
// app/dashboard/page.jsx
import { Suspense } from "react";
import App from "./App";

const Page = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <App />
  </Suspense>
);

export default Page;
```

:::
