# Препроцессор SCSS (Sass)

## Данные

#### История

- **1996** - CSS
- **2006** - Sass
- **2009** - Less
- **2010** - Stylus
- **2013** - PostCSS

#### Препроцессоры

::: info

- https://sass-scss.ru/ - SCSS (Sass)
- https://lesscss.org/ - Less
- https://stylus-lang.com/ - Stylus
- https://postcss.org/ - PostCSS
  :::

## Функционал

### Переменные

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

### Вложенности

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

### Расширение селектора

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

### Операции

- `+` `-` `/` `%`
- `>` `<` `<=` `>=` `==` `!=`

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
$one: 50px;
$two: 2;
#main {
  padding: {
    top: $one + 200;
    bottom: $one / $two;
    left: $two + px;
    right: 243px - 231px;
  }
  background-color: trans + parent;
}
```

  </template>

<template #last>

```css
#main {
  padding-top: 250px;
  padding-bottom: 25px;
  padding-left: 2px;
  padding-right: 12px;
  background-color: transparent;
}
```

</template>
</v-two>

### Миксины `@mixin`

- Позволяют сделать блок стилей, который может быть использован повторно в любом месте документа

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
@mixin my-border($color, $width) {
  border-color: $color;
  border-width: $width;
}
p {
  @include my-border(red, 2px);
}
```

  </template>

<template #last>

```css
p {
  border-color: red;
  border-width: 2px;
}
```

</template>
</v-two>
