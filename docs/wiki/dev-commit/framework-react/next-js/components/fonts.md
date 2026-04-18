# Шрифты

## 1. Google Fonts

::: info
https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
:::
- Для доступа к шрифту используется CSS-переменная
- Импортировать можно любой шрифт, доступный в Google Fonts

app/fonts.js

```js
import cn from 'classnames';
import { Roboto } from 'next/font/google';

export const robotoRegular = Roboto({
    subsets: ['cyrillic'], // latin
    display: 'swap',
    weight: '400',
    variable: '--font-roboto-regular',
})

export default cn(
    robotoRegular.variable,
    // Другие шрифты
);
```

app/layout.jsx

```js
import FontClasses from './fonts';

const RootLayout = (props) => {
    const { children } = props;

    return (
        <html lang="ru" className={FontClasses}>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;
```

app/globals.css

```css
body {
    font-family: var(--font-roboto-regular);
}
```

::: details Шрифт Robotonode_modules\next\dist\compiled\@next\font\dist\google\index.d.ts

```js
const Roboto = {
    weight: '100' | '300' | '400' | '500' | '700' | '900', // массив или значение
    style: 'normal' | 'italic', // массив или значение
    subsets: ['cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese'],
}
```

:::

### Variable Fonts и стандартные шрифты

#### Variable Fonts

::: info
https://fonts.google.com/variablefonts
:::
- Для вариантивных шрифтов не нужно задавать "weight"

```js
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})
```

---

#### Стандартные шрифты

::: info
https://fonts.google.com
:::
- Нужно задавать "weight"

```js
import { Roboto } from 'next/font/google';

export const robotoRegular = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
})
```

## Local Fonts

::: info
https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts
:::

```js
import localFont from 'next/font/local';
```
