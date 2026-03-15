# Математические операции

## Операции

- `+` `-` `/` `%`
- `>` `<` `<=` `>=` `==` `!=`

## Пример

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

## Интерполяция

::: tip Интерполяция

- **Интерполяция** - использование переменных в селекторах и названиях свойств
  :::

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
$cn: content;
.item {
  #{$cn}: "con"+"tent";
}
```

  </template>

<template #last>

```css
.item {
  content: "content";
}
```

</template>
</v-two>

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
$in: интер;
.item {
  content: "#{$in}поляция";
}
```

  </template>

<template #last>

```css
.item {
  content: "интерполяция";
}
```

</template>
</v-two>

## Сложение цветов

- При сложении rgba значение прозрачности должно быть одинаковым

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
div {
  $color1: #440203 + #550506;
  $color2: #010203 * 2;
  $color3: rgba(180, 0, 0, 0.75) + rgba(20, 225, 0, 0.75);
}
```

  </template>

<template #last>

```css
div {
  background-color: #990709;
  background-color: #020406;
  background-color: rgba(200, 225, 0, 0.75);
}
```

</template>
</v-two>
