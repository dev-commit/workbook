# getInitialProps

Устаревшее API: нужно использовать getServerSideProps или getStaticProps::: info
https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
:::
- Вызывается на сервере и на фронте
- Использовать, если нужно комбинировать Frontend и Backend

## Использование

```js
const App = ({ data }) => {
	// В пропсе приходят данные по ajax-запросу
	console.log(data);
    return (...)
}

// 1. Определяем статический метод, который будет выполняться на сервере
App.getInitialProps = async () => {
    // 2. Запрос к endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // 3. Парсим JSON
    const data = await response.json();
    // 4. Возвращаем объект
    return {
        data
    }
}

export default App;
```

## Context Object

- pathname - Текущий маршрут. Это путь к странице в /pages
- query - Раздел строки запроса URL-адреса, анализируемого как объект. Можно получить динамический параметр в URL
- asPath - Строка фактического пути (включая запрос), отображаемого в браузере
- req - Объект HTTP-запроса (только сервер)
- res - Объект HTTP-ответа (только сервер)
- err - Объект ошибки, если во время рендеринга обнаружена какая-либо ошибка

```js
App.getInitialProps = async (context) => {
    // Читаем динамический параметр "id"
    // Отобразится в консоли сервера
    console.log('Zzzzz', context.query.id);

    return {}
}
```

## Добавить Loading загрузки данных

- При первоначальном рендеринге отправляется запрос на сервер, getInitialProps выполняется на сервере. И в нём присутствует объект req
- Если загрузили сайт и делаем переход на новую страницу, то метод getInitialProps будет вызываеться на фронте. И объекта req не будет
- Возвращая null, в компоненте можно обработать и добавить Loading

```js
App.getInitialProps = async (context) => {
    // Вызывается с фронта
    if (!context.req) {
        return {
            data: null
        }
    }
    // Иначе, вызывается с бэка

    return {}
}
```

::: info
https://medium.com/@apalshah/next-js-how-to-make-your-own-progress-bar-indicator-component-easily-445e58777473
https://github.com/rstacruz/nprogress
https://github.com/apal21/nextjs-progressbar
:::
