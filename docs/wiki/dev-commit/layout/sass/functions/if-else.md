# Условия if-else

## Примеры

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
p {
  @if 1+1 == 2 {
    color: red;
  }
}
```

  </template>

<template #last>

```css
p {
  color: red;
}
```

</template>
</v-two>

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
$type: monster;
p {
  @if $type == ocean {
    color: red;
  } @else if $type == monster {
    color: orange;
  } @else {
    color: blue;
  }
}
```

  </template>

<template #last>

```css
p {
  color: orange;
}
```

</template>
</v-two>
