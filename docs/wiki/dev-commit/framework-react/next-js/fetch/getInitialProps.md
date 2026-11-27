# getInitialProps

## Информация

::: warning

- Устаревшее API: нужно использовать `getServerSideProps` или `getStaticProps`

:::

::: info

- https://nextjs.org/docs/api-reference/data-fetching/getInitialProps

:::

- Вызывается на сервере и на фронте
- Использовать, если нужно комбинировать Frontend и Backend

## Использование

```jsx
const App = ({ data }) => {
  // В пропсе приходят данные по ajax-запросу
  console.log(data);
  return <div>...</div>;
};

// 1. Определяем статический метод, который будет выполняться на сервере
App.getInitialProps = async () => {
  // 2. Запрос к endpoint
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // 3. Парсим JSON
  const data = await response.json();
  // 4. Возвращаем объект
  return {
    data,
  };
};

export default App;
```

## Context Object

_getInitialProps_ можно вызвать с аргументом _context_ - это объект, состоящий из:

- `pathname` - Текущий маршрут. Это путь к странице в _/pages_
- `query` - Раздел строки запроса URL-адреса, анализируемого как объект. Можно получить динамический параметр в URL
- `asPath` - Строка фактического пути (включая запрос), отображаемого в браузере
- `req` - Объект HTTP-запроса (только сервер)
- `res` - Объект HTTP-ответа (только сервер)
- `err` - Объект ошибки, если во время рендеринга обнаружена какая-либо ошибка

```js
App.getInitialProps = async (context) => {
  // Читаем динамический параметр "id"
  // Отобразится в консоли сервера
  console.log("Zzzzz", context.query.id);

  return {};
};
```

## Добавить Loading загрузки данных

- При первоначальном рендеринге отправляется запрос на сервер, _getInitialProps_ выполняется на сервере. И в нём присутствует объект _req_
- Если загрузили сайт и делаем переход на новую страницу, то метод _getInitialProps_ будет вызываться на фронте. И объекта _req_ не будет
- Возвращая _null_, в компоненте можно обработать и добавить Loading

```js
App.getInitialProps = async (context) => {
  // Вызывается с фронта
  if (!context.req) {
    return {
      data: null,
    };
  }
  // Иначе, вызывается с бэка

  return {};
};
```

::: info

- https://medium.com/@apalshah/next-js-how-to-make-your-own-progress-bar-indicator-component-easily-445e58777473 - Статья: Next.js — Make your own Progress bar indicator component easily
- https://github.com/rstacruz/nprogress - Пакет nprogress
- https://github.com/apal21/nextjs-progressbar - Пакет nextjs-progressbar. Готовый компонент для Loading

:::
