# getStaticProps

## Информация

::: info

- https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

:::

- Похож на `getServerSideProps`
- Нужен для рендеринга статического контента: данные для страницы доступны во время сборки, до запроса пользователя, и страница отдаётся в заранее прибилдженном формате
- Относится к статической генерации сайтов
- Для _динамических маршрутов_ используется только вместе с `getStaticPaths`

::: warning

- Работает только в Pages Router (папка `pages`). В App Router данные запрашиваются прямо в серверных компонентах

:::

## Использование

```jsx
const App = ({ data }) => {
  // В пропсе приходят данные по ajax-запросу
  console.log(data);
  return <div>...</div>;
};

export const getStaticProps = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default App;
```
