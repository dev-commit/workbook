# getStaticProps

::: info
https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
:::
- Похож на getServerSideProps
- Нужен для рендеринг статического контента от пользователя, который доступен в заранее прибидженном формате
- Относится к статической генерации сайтов
- Нельзя использовать для динамических маршрутов

```js
const App = ({ data }) => {
	// В пропсе приходят данные по ajax-запросу
	console.log(data);
    return (...)
}

export const getStaticProps = async (context) => {
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
