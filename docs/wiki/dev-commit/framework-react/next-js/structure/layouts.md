# Layouts

::: info
https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
:::

## Root Layout

- **Root Layout** - главный обязательный Layout для всех страниц приложения
- Позволяет изменять исходный HTML-код, возвращаемый с сервера
- Должен определять теги &lt;html&gt; и &lt;body&gt;, т.к. Next.js не создает их автоматически
- Сам RootLayout явно не вызывается. Привязка происходит под капотом

```js
export const metadata = {
    title: 'Название проекта',
    description: 'Описание проекта',
}

const RootLayout = (props) => {
    const { children } = props;

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;
```

### Metadata

::: info
https://nextjs.org/docs/app/building-your-application/optimizing/metadata
:::
- Используется для определения метаданных приложения: meta, link тегов внутри HTML, head элементов
- При использовании обоих этих вариантов Next.js автоматически сгенерирует соответствующие &lt;head&gt; элементы для страниц
- Метаданныке могут быть статические (объявление объекта) и динамические (объявлении функции)

```js
// Явно в коде не вызывается - всё происходит под капотом
export const metadata = {
    title: 'Название проекта',
    description: 'Описание проекта',
}
```

## Layout для страницы

- Любая страница может определить собственный Layout. Для этого нужно добавить layout.js рядом с page.js (в примере страница Dashboard)
- В константу metadata также можно добавить метоинформацию
- Явно DashboardLayout вызывать не нужно - он автоматически подключится к странице

<!-- <img src="../@img/layouts.png" width="250px"/> -->

```js
export const metadata = {
    title: 'Новый заголовок',
    description: 'Новое описание',
}

const DashboardLayout = (props) => {
    const { children } = props;

    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>Navbar</nav>
            {children}
        </section>
    )
}

export default DashboardLayout;
```
