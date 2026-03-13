# Импорт других SASS файлов (@import)

## Данные

**Сконвертируется в css как @import если:**

- Расширение css
- Media-параметры
- Присутствует http
- Присутствует url

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
@import "main.css";
@import "main" screen;
@import "http://foo.com/main";
@import url(main);
```

  </template>

<template #last>

```css
@import url(main.css);
@import "main" screen;
@import "http://foo.com/main";
@import url(main);
```

</template>
</v-two>

## Импортируется в sass файл если

1. Расширение sass - `@import "main.sass";`
2. Расширение scss - `@import "main.scss";`
3. Файлы css (main.css) - `@import "main";`
4. Файлы-фрагмены (\_main.sass / \_main.scss) - `@import "main";`

```scss
@import "example.scss";
@import "example1", "example2";
```

<v-two compare :title="['Sass', 'CSS']">
  <template #first>

```scss
/* файл example.scss */
.example {
  color: green;
}
/* файл style.scss */
#main {
  @import "example";
}
```

  </template>

<template #last>

```css
/* файл style.css */
#main .example {
  color: green;
}
```

</template>
</v-two>
