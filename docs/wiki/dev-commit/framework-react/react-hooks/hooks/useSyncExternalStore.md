# Хук useSyncExternalStore()

::: info
https://react.dev/reference/react/useSyncExternalStore
:::

	Позвляет подписаться на внешний Store
    
функция, которая принимает callback и подписывается на хранилище. Когда хранилище изменяется, оно должно вызывать callback. Это приведет к повторному рендерингу компонента. Функция подписки должна возвращать функцию, очищающую подписку
функция, которая возвращает snapshot данных в store, необходимых компоненту. Пока store не изменился, повторные вызовы getSnapshot должны возвращать одно и то же значение. Если хранилище изменяется и возвращаемое значение отличается (по сравнению с Object.is), React повторно отображает компонент
(optional) Функция возвращает initial snapshot данных в store. Он будет использоваться только во время серверного рендеринга и во время hydration server-rendered content на клиенте. Snapshot сервера должен быть одним и тем же между клиентом и сервером, и обычно сериализуется и передается от сервера к клиенту. Если опустить этот аргумент, рендеринг компонента на сервере вызовет ошибку
Текущий snapshot store, который можно использовать в своей логике

```js
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

const App = () => {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    // ...
}
```
