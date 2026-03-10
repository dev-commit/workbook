# @custom-selector

::: info

- https://github.com/postcss/postcss-custom-selectors - PostCSS Custom Selectors
  :::

## Пример

<v-two compare :title="['PostCSS', 'CSS']">
  <template #first>

```css
@custom-selector :--heading {
  expansion: h1, h2, h3
}
article :--heading + p {
  margin: 0;
}
```

  </template>

<template #last>

```css
article h1 + p,
article h2 + p,
article h3 + p {
  margin: 0;
}
```

  </template>
</v-two>
