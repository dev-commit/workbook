# useSWRImmutable()

## Информация

::: info

- https://swr.vercel.app/ru/docs/revalidation#disable-automatic-revalidations
  :::

::: danger

**`useSWRImmutable()`** - Хук помечает ресурс как неизменяемый. Он имеет тот же API-интерфейс, что и обычный хук useSWR

:::

## Пример

```js
import useSWRImmutable from "swr/immutable";

useSWRImmutable(key, fetcher, options);
```
