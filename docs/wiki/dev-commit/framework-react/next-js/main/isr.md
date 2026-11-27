# ISR

## Информация

::: info

- https://nextjs.org/docs/pages/guides/incremental-static-regeneration

:::

::: tip Определение

- **Incremental Static Regeneration (ISR)** - технология, позволяющая обновлять статически сгенерированные страницы после создания сайта без необходимости перестраивать всё приложение, что сочетает скорость статических сайтов с динамическим обновлением контента. Это достигается за счёт фонового обновления страниц с заданным интервалом или по требованию, что делает контент свежим, а сайт — производительным и масштабируемым, особенно для сайтов с частым изменением данных, например, новостных платформ или интернет-магазинов.

:::

## ISR позволяет

- Обновление статического контента без перестройки всего сайта
- Снижение нагрузки на сервер за счет обслуживания предварительно отрисованных статических страниц для большинства запросов
- Автоматическое добавление на страницы соответствующих заголовков cache-control
- Обработка больших объемов контента на страницах без длительного времени next build

## Пример

<v-two text-right>
<template #first>

```tsx
import type { GetStaticPaths, GetStaticProps } from "next";

interface Post {
  id: string;
  title: string;
  content: string;
}

interface Props {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json(),
  );
  const paths = posts.map((post: Post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: {
  params: { id: string };
}) => {
  const post = await fetch(`https://api.vercel.app/blog/${params.id}`).then(
    (res) => res.json(),
  );

  return {
    props: { post },
    // Next.js will invalidate the cache when a
    // request comes in, at most once every 60 seconds.
    revalidate: 60,
  };
};

export default function Page({ post }: Props) {
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
```

</template>
<template #last>

**Как работает пример**

1. Во время next build генерируются все известные записи в блоге.
2. Все запросы к этим страницам (например, /blog/1) кэшируются и выполняются мгновенно.
3. По истечении 60 секунд следующий запрос по-прежнему вернет кэшированную (теперь устаревшую) страницу.
4. Кэш становится недействительным, и в фоновом режиме начинается генерация новой версии страницы.
5. После успешной генерации следующий запрос вернет обновленную страницу и кэширует ее для последующих запросов.
6. Если запись /blog/26 запрошена и существует, страница будет сгенерирована по запросу. Это поведение можно изменить, используя другое резервное значение. Однако, если запись не существует, возвращается ошибка 404.

</template>
</v-two>
