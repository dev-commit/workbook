# Пользовательские типы

## Информация

::: info

- https://nextjs.org/docs/app/api-reference/config/typescript#custom-type-declarations - Documentation: Custom Type Declarations

:::

## Файл "next-env.d.ts" и tsconfig.json

- Файл "next-env.d.ts" генерируется автоматически, поэтому любые внесенные изменения будут перезаписаны при запуске проекта
- Содержимое файла зависит от версии Next.js. Файл не редактируют вручную и добавляют в .gitignore, но он должен быть в `include` в tsconfig.json

```ts
// next-env.d.ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

- Вместо этого нужно создать новый файл, например "types.d.ts" и указать его в tsconfig.json

```ts
// types.d.ts
interface IRootLayout {
  children: React.ReactNode;
}
```

```json
// tsconfig.json
{
  "include": [
    "types.d.ts",
    "next-env.d.ts",
    ".next/types/**/*.ts",
    "**/*.ts",
    "**/*.tsx"
  ]
}
```

## Использование типов

- Для использования пользовательских типов не нужен дополнительный импорт типа

```tsx
// app/layout.tsx
const RootLayout = (props: IRootLayout) => {
  const { children } = props;

  return (
    <html lang="ru" className={FontClasses}>
      <body>{children}</body>
    </html>
  );
};
```
