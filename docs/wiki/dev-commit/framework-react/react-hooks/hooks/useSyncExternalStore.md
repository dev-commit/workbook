# Хук useSyncExternalStore()

::: info

- https://react.dev/reference/react/useSyncExternalStore
  :::

::: danger

**`useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)`** - позвляет подписаться на внешний Store

> - `subscribe` - функция, которая принимает callback и подписывается на хранилище. Когда хранилище изменяется, оно должно вызывать callback. Это приведет к повторному рендерингу компонента. Функция подписки должна возвращать функцию, очищающую подписку
> - `getSnapshot` - функция, которая возвращает snapshot данных в store, необходимых компоненту. Пока store не изменился, повторные вызовы getSnapshot должны возвращать одно и то же значение. Если хранилище изменяется и возвращаемое значение отличается (по сравнению с Object.is), React повторно отображает компонент
> - `getServerSnapshot` (optional) - функция возвращает initial snapshot данных в store. Он будет использоваться только во время серверного рендеринга и во время hydration server-rendered content на клиенте. Snapshot сервера должен быть одним и тем же между клиентом и сервером, и обычно сериализуется и передается от сервера к клиенту. Если опустить этот аргумент, рендеринг компонента на сервере вызовет ошибку
> - _return_ - текущий snapshot store, который можно использовать в своей логике

:::

::: tip Паттерн

```js
import { useSyncExternalStore } from "react";
import { todosStore } from "./todoStore.js";

const App = () => {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot,
  );
  // ...
};
```

:::
