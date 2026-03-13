# Переменные

## Переменные

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
$width: 1000px;
$bg-color: green;
#main {
  width: $width;
  background-color: $bg-color;
}
```

  </template>

<template #last>

```css
#main {
  width: 1000px;
  background-color: green;
}
```

  </template>
</v-two>

## Вложенность переменных

- Переменная доступна только на текущем уровне вложенности, чтобы была видна везде, дописать `!global`

```scss
$bg-color: green !global;
```

## Переменные в calc()

- Необходимо записывать `#{$spacing}`

```scss
$spacing: rem(6px);

.item {
  width: calc(50% - #{$spacing});
  height: calc(50% - #{$spacing / 2});
}
```
