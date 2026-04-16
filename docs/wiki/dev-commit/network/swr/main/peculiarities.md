# Особенности

## Кеширование и дедупликация запросов

::: info
https://swr.vercel.app/ru/docs/advanced/performance#deduplication
:::
- **Дедупликаци** - устранение дубликатов
- Кеширование и дедупликация запросов позволяет пропускать ненужные сетевые запросы
- SWR глубоко сравнивает изменения данных по умолчанию. Если значение data не изменилось, повторный рендеринг запускаться не будет.

```js
const useUser = () => {
  return useSWR('/api/user', fetcher)
}

const Username = () => {
  const { data } = useUser()
  return <h1>{data.name}</h1>
}

const App = () => {
  return (
    <>
      <User />
      <User />
      <User />
    
  )
}
```
- В примере компонент User вызывается 3 раза, но в API будет отправлен только 1 запрос, т.к. они используют один и тот же ключ SWR - useUser, а запрос автоматически выводится, кешируется и распределяется

## Tree Shaking

::: info
https://swr.vercel.app/ru/docs/advanced/performance#tree-shaking
:::
- Для SWR можно легко применить Tree Shaking
- Он не имеет side-effects
- Это означает, что если вы импортируете только основной API useSWR, неиспользуемые API, такие, как useSWRInfinite, не будут включены в ваше приложение
