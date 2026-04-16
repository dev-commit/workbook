# useSWRImmutable()

::: info
https://swr.vercel.app/ru/docs/revalidation#disable-automatic-revalidations
:::
- Хук помечает ресурс как неизменяемый
- Он имеет тот же API-интерфейс, что и обычный хук useSWR

```js
import useSWRImmutable from 'swr/immutable'

// ...
useSWRImmutable(key, fetcher, options)
```
