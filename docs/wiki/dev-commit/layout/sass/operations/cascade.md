# Вложенности

## Вложенности

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
#main {
  width: 100px;
  p,
  div {
    color: black;
  }
}
```

  </template>

<template #last>

```css
#main {
  width: 100px;
}
#main p,
#main div {
  color: black;
}
```

</template>
</v-two>

## Расширение селектора

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
a {
  color: blue;
  &:hover {
    color: green;
  }
}
```

  </template>

<template #last>

```css
a {
  color: blue;
}
a:hover {
  color: green;
}
```

</template>
</v-two>

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
#main {
  color: black;
  &-sidebar {
    color: orange;
  }
}
```

  </template>

<template #last>

```css
#main {
  color: black;
}
#main-sidebar {
  color: orange;
}
```

</template>
</v-two>

## Свойства в пространстве имен

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
#main {
  font: {
    family: fantasy;
    size: 28px;
    weight: bold;
  }
}
```

  </template>

<template #last>

```css
#main {
  font-family: fantasy;
  font-size: 28px;
  font-weight: bold;
}
```

</template>
</v-two>
