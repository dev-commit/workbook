# Миксины `@mixin`

::: tip `@mixin`

- **@mixin** - позволяют сделать блок стилей, который может быть использован повторно в любом месте документа
  :::

## Базовый пример

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

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
@mixin large-text {
  font: {
    family: Arial;
    size: 30px;
    weight: bold;
  }
  color: red;
}
p {
  @include large-text;
}
```

  </template>

<template #last>

```css
p {
  font-family: Arial;
  font-size: 30px;
  font-weight: bold;
  color: red;
}
```

</template>
</v-two>

## Подключение миксинов друг в друга

```scss
@mixin large-text {
	...
	@include small-text;
}
```

## Миксины могут принимать аргументы, которые передаются при подключении миксина

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
@mixin my-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
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
  border-style: dashed;
}
```

</template>
</v-two>

## Значение аргумента по умолчанию

```scss
@mixin my-border($color, $width: 10px) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p {
  @include my-border(red);
}
```
