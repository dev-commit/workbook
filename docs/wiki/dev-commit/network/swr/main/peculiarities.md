# Особенности

## Кеширование и дедупликация запросов

::: info

- https://swr.vercel.app/ru/docs/advanced/performance#deduplication - Дедупликация
  :::

::: tip Определения

- **Дедупликация** - устранение дубликатов
- _Кеширование_ и _дедупликация_ запросов позволяет пропускать ненужные сетевые запросы
- SWR глубоко сравнивает изменения данных по умолчанию. Если значение data не изменилось, повторный рендеринг запускаться не будет.
  :::

::: details Пример

- В примере компонент `User` вызывается 3 раза, но в API будет отправлен только 1 запрос, т.к. они используют один и тот же ключ SWR - `useUser`, а запрос автоматически выводится, кешируется и распределяется

```tsx
const useUser = () => {
  return useSWR("/api/user", fetcher);
};

const Username = () => {
  const { data } = useUser();
  return <h1>{data.name}</h1>;
};

const App = () => {
  return (
    <div>
      <User />
      <User />
      <User />
    </div>
  );
};
```

:::

## Tree Shaking

::: info

- https://swr.vercel.app/ru/docs/advanced/performance#tree-shaking - Tree Shaking
  :::

- Для SWR можно легко применить Tree Shaking
- Он не имеет side-effects
- Это означает, что если вы импортируете только основной API useSWR, неиспользуемые API, такие, как useSWRInfinite, не будут включены в ваше приложение
