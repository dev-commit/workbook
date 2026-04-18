# getServerSideProps

::: info
https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
:::
- Вызывается только на сервере
- Можно делать запросы к БД напрямую, в отличие от getInitialProps
- getServerSideProps обязательно нужно экспортировать

```js
const App = ({ data }) => {
	// В пропсе приходят данные по ajax-запросу
	console.log(data);
    return (...)
}

export const getServerSideProps = async (context) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}

export default App;
```
