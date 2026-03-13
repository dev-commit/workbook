# Наследование (@extend)

## Примеры

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
.error {
  border: 1px solid #f00;
  background-color: #fdd;
}
.criticalError {
  @extend .error;
  border-width: 3px;
}
```

  </template>

<template #last>

```css
.error,
.criticalError {
  border: 1px solid #f00;
  background-color: #fdd;
}
.criticalError {
  border-width: 3px;
}
```

</template>
</v-two>

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
.hoverlink {
  @extend a:hover;
}
a:hover {
  text-decoration: underline;
}
```

  </template>

<template #last>

```css
a:hover,
.hoverlink {
  text-decoration: underline;
}
```

</template>
</v-two>

## Селекторы-шаблоны

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
%item-base {
  color: green;
}
.item1 {
  @extend %item-base;
  margin: 10px;
}
.item2 {
  @extend %item-base;
  margin: 20px;
}
```

  </template>

<template #last>

```css
.item1,
.item2 {
  color: green;
}
.item1 {
  margin: 10px;
}
.item2 {
  margin: 20px;
}
```

</template>
</v-two>
