# Циклы For, While

## Данные

```scss
// диапазон включает значение начала и конца
@for $i from through ;

// диапазон включает значение начала и не включает значение конца
@for $i from to ;
```

## Примеры

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
    background-image: url(img/#{$i}.jpg);
  }
}
```

  </template>

<template #last>

```css
.item-1 {
  width: 2em;
  background-image: url(img/1.jpg);
}
.item-2 {
  width: 4em;
  background-image: url(img/2.jpg);
}
.item-3 {
  width: 6em;
  background-image: url(img/3.jpg);
}
```

</template>
</v-two>

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
$i: 7;
@while $i > 0 {
  .item-#{$i} {
    width: 1em * $i;
  }
  $i: $i - 3;
}
```

  </template>

<template #last>

```css
.item-7 {
  width: 7em;
}
.item-4 {
  width: 4em;
}
.item-1 {
  width: 1em;
}
```

</template>
</v-two>
