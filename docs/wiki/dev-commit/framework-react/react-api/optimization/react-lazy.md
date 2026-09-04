# React.lazy(), Suspense

## Информация

::: danger

**`React.lazy()`** - позволяет вам определять компонент, который загружается динамически. Это помогает уменьшить размер сборки, откладывая загрузку компонентов, которые не используются во время первоначального рендера

:::

::: danger

**`React.Suspense`** - позволяет показать индикатор загрузки в случае, если некоторые компоненты в дереве под ним ещё не готовы к рендеру

> - `props` - props
> - _return_ - null

:::

## Пример

```js
import React, { Suspense } from "react";

const Target = React.lazy(() => import("./Target"));

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Target />
    </Suspense>
  </>
);
```
