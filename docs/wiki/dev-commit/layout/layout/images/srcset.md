# Атрибуты srcset и sizes

::: warning

- Разобрать тему
  :::

> Атрибуты srcset и sizes работают вместе для создания responsive images

### 1. Атрибут sizes

- Атрибут sizes - определяет разную ширину изображения в зависимости от ширины экрана на основе Media Queries

```html
<img sizes="(media-condition) width" />
```

- `(media-condition)` - Media query (e.g max-width: 540px)
- `width` - Ширина доступного пространства в px, em, vw. Layout width

```js
<img
  sizes="
  (max-width: 710px) 120px, // 0 - 710px
  (min-width: 991px) 193px, // 711px - 991px
  278px                     // 992px and larger
"
/>
```

### 2. Атрибут srcset

> Атрибут srcset указывает несколько изображений разного размера или качества

```html
<img srcset="URL width" />
```

- `url` - url изображения
- `with` - реальная ширина изображения в px (н-р 120px). Но с использованием единицы `w` (н-р, 120w - это 120px)
  Ширина изображения измеряется в пикселях, но

```html
<img
  srcset="
    img/vangogh-sm.jpg 120w,
    img/vangogh.jpg    193w,
    img/vangogh-lg.jpg 278w
  "
/>
```
