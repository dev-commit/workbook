# Операции над цветами

| Функция                       | Описание                                    |
| ----------------------------- | ------------------------------------------- |
| `lighten($color, 10%)`        | Осветляет исходный цвет                     |
| `darken($color, 10%)`         | Затемняет исходный цвет                     |
| `saturate($color, 70%)`       | Увеличивает насыщенность цвета от исходного |
| `desaturate($color, 70%)`     | Уменьшает насыщенность цвета от исходного   |
| `transparentize($color, 0.2)` | Добавляет к исходному цвету альфа-канал     |
| `opacify($color, 0.1)`        | Задание менее прозрачного цвета             |
| `transparentize($color, 0.4)` | Задание более прозрачного цвета             |
| `rgba(#333, 0.75)`            | Перевод из hex в rgba                       |

## Примеры

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
$color: rgba(255, 0, 0, 0.7);

#main {
  color: opacify($color, 0.1);
  color: transparentize($color, 0.5);
}
```

  </template>

<template #last>

```css
#main {
  color: rgba(255, 0, 0, 0.8);
  color: rgba(255, 0, 0, 0.2);
}
```

</template>
</v-two>

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
#main {
  color: rgba(#333, 0.75);
}
```

  </template>

<template #last>

```css
#main {
  color: rgba(51, 51, 51, 0.75);
}
```

</template>
</v-two>
