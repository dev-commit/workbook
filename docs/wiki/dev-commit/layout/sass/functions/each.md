# Директива @each

## Данные

- Если требуемся пройтись по списку значений
- Устанавливает переменную в каждое из значений списка или карты и выводит содержащиеся в ней стили

## Примеры

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
@each $animal in cat, dog, mouse, tiger, wolf {
  .#{$animal}-icon {
    background-image: url(/img/#{$animal}.png);
  }
}
```

  </template>

<template #last>

```css
.cat-icon {
  background-image: url(/img/cat.png);
}
.dog-icon {
  background-image: url(/img/dog.png);
}
.mouse-icon {
  background-image: url(/img/mouse.png);
}
.tiger-icon {
  background-image: url(/img/tiger.png);
}
.wolf-icon {
  background-image: url(/img/wolf.png);
}
```

</template>
</v-two>
