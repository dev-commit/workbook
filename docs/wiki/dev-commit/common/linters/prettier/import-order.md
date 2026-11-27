# Настройка порядка импортов

## Информация

::: info

- https://github.com/trivago/prettier-plugin-sort-imports

:::

## Установка и настройка

```js
// package.json
{
  "devDependencies": {
    "@trivago/prettier-plugin-sort-imports": "^3.2.0"
  }
}
```

```js
// .prettierrc.js
module.exports = {
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "types|Types",
    "utils|config|constants|hooks|services|store|context",
    "^pages",
    "^layouts",
    "^components",
    "^ui-kit",
    "^[.].*(?<!.module.scss)$|^[.][.].*(?<!.module.scss)$",
    "scss",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
```
