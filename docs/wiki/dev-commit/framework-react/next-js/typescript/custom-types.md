# Пользовательские типы

::: info
https://nextjs.org/docs/pages/building-your-application/configuring/typescript#custom-type-declarations
:::

## Файл "next-env.d.ts" и tsconfig.json

- Файл "next-env.d.ts" генерируется автоматически, поэтому любые внесенные изменения будут перезаписаны при запуске проекта

next-env.d

```js
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
```
- Вместо этого нужно создать новый файл, например "types.d.ts" и указать его в tsconfig.json

types.d.ts

```js
interface IRootLayout {
  children: React.ReactNode
}
```tsconfig.json

```js
{
  "include": [
    "types.d.ts",
    "next-env.d.ts",
  ],
}
```

## Использование типов

- Для использования пользовательских типов не нужен дополнительный импорт типа

app\layout.tsx

```js
const RootLayout = (props: IRootLayout) => {
  const { children } = props

  return (
    <html lang="ru" className={FontClasses}>
      <body>{children}</body>
    </html>
  )
}
```
