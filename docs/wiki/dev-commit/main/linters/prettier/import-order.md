# Настройка порядка импортов

::: info
https://github.com/trivago/prettier-plugin-sort-imports
:::

```js
{
    "devDependencies": {
        "@trivago/prettier-plugin-sort-imports": "^3.2.0",
    },
}
```

```js
module.exports = {
    importOrder: [
        '^react$',
        '<THIRD_PARTY_MODULES>',
        'types|Types',
        'utils|config|constants|hooks|services|store|context',
        '^pages',
        '^layouts',
        '^components',
        '^ui-kit',
        '^[.].*(?<!.module.scss)$|^[.][.].*(?<!.module.scss)$',
        'scss',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
```
