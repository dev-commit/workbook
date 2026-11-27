# Шрифты

## Google Fonts

::: info

- https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts

:::

- Для доступа к шрифту используется CSS-переменная
- Импортировать можно любой шрифт, доступный в Google Fonts

::: code-group

```js [app/fonts.js]
import cn from "classnames";
import { Roboto } from "next/font/google";

export const robotoRegular = Roboto({
  subsets: ["cyrillic"], // latin
  display: "swap",
  weight: "400",
  variable: "--font-roboto-regular",
});

export default cn(
  robotoRegular.variable,
  // Другие шрифты
);
```

```jsx [app/layout.jsx]
import FontClasses from "./fonts";

const RootLayout = (props) => {
  const { children } = props;

  return (
    <html lang="ru" className={FontClasses}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
```

```css [app/globals.css]
body {
  font-family: var(--font-roboto-regular);
}
```

:::

::: details Шрифт Roboto

<!-- prettier-ignore -->
```ts
// node_modules/next/dist/compiled/@next/font/dist/google/index.d.ts
const Roboto = {
  weight: "100" | "300" | "400" | "500" | "700" | "900", // Массив или значение
  style: "normal" | "italic", // Массив или значение
  subsets: ["cyrillic" | "cyrillic-ext" | "greek" | "greek-ext" | "latin" | "latin-ext" | "vietnamese"],
};
```

:::

### Variable Fonts и стандартные шрифты

<v-two :title="['Variable Fonts', 'Стандартные шрифты']">
<template #first>

::: info

- https://fonts.google.com/variablefonts

:::

- Для вариативных шрифтов не нужно задавать "weight"

```js
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
```

</template>
<template #last>

::: info

- https://fonts.google.com

:::

- Нужно задавать "weight"

```js
import { Roboto } from "next/font/google";

export const robotoRegular = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
```

</template>
</v-two>

## Local Fonts

::: info

- https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts

:::

```js
import localFont from "next/font/local";
```
