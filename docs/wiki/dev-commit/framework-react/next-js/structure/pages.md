# Pages

::: info
https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
:::
- Next.js ищет имя page.js в директории app для формировани роутов

<!-- <img src="../@img/pages.png" width="400px"/> -->

```js
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return <h1>Hello, Home page!</h1>
}
```

```js
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return <h1>Hello, Dashboard Page!</h1>
}
```

## ИспользованиеPages Router

::: info
https://nextjs.org/docs/getting-started/installation#the-pages-directory-optional
:::

- В Next.js поддерживается предыдущая версия роутинга, когда страницу можно размещать в директории pages
- Для таких страниц будет недоступен Root Layout и нужно будет создавать собственный, которым нужно обернуть компонент
- Если в собсвенном Layout использовать тег &lt;html&gt;, то будет ошибка

#### Пример для страницы Dashboard

- Next.js увидит, что в директории "pages" есть директория "dashboard" и создаст роут /dashboard

pages/dashboard/index.jsx

```js
import LayoutDashboard from '../../layouts/LayoutDashboard';

const DashboardPage = () => {
    return (
        <LayoutLinks>
            <h1>Dashboard</h1>
        </LayoutLinks>
    )
}

export default LinksPage;
```

layouts/LayoutDashboard.jsx

```js
import Head from 'next/head';

const LayoutDashboard = (props) => {
    const { children } = props;

    return (
        <>
            <Head>
                <title>Название</title>
                <meta name="description" content="Описание"></meta>
            </Head>
            <main>
                {children}
            </main>
        
    )
}

export default LayoutDashboard;
```
