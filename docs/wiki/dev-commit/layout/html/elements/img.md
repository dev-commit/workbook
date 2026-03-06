# Изображения

::: warning 📌 Check

- Атрибуты `srcset` и `sizes`
- Progressive JPEG
  :::

::: info ✈️ Ссылки

- https://tinypng.com/ - Оптимизация изображений
  :::

## Атрибуты srcset и sizes

::: warning 📌 Check

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

## HTML-теги

::: details `<img />`

```html
<img
  src="img/picture.jpg"
  alt="Альтернативный текст"
  title="Подсказка"
  loading="lazy"
/>
```

**Пропорции изображения**

- При одновременном задании width и height на css возникает искажение пропорций. Поэтому следует задавать только width или только height
- Без искажения пропорций применяется свойство object-fit со значениями contain или cover
  **Lazy Loading изображения**
- Атрибут loading="lazy" добавляет Lazy Loading ([Ссылка на MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading))
  :::

::: details `<picture />` `<source />`

```html
<picture>
  <!-- Меньше 600px (Picture #1) -->
  <source
    media="(max-width: 600px)"
    srcset="https://images.unsplash.com/photo-1560363199-a1264d4ea5fc"
  />

  <!-- От 600px до 700px (Picture #2) -->
  <source
    media="(min-width: 600px) and (max-width: 700px)"
    srcset="https://images.unsplash.com/photo-1559757742-654d5da2eaab"
  />

  <!-- Больше 700px. Изображение по-умолчанию (Picture #3) -->
  <img
    width="100%"
    src="https://images.unsplash.com/photo-1560765447-da05a55e72f8"
  />
</picture>
```

:::

---

## CSS свойства

::: details `object-fit`
| Значение | Описание |
| --------- | ------------------------------------------------------------------------------------------------------- |
| `cover` | Элемент увеличивается или уменьшается, чтобы целиком заполнить заданную область с сохранением пропорций |
| `contain` | Элемент масштабируется, чтобы целиком уместиться в заданные размеры с соблюдением пропорций |

- Правило подстраивания изображения под заданные размеры

```css
img {
  object-fit: cover;
  object-fit: contain;
}
```

:::

::: details `background-image`

- Для свойства background-image можно использовать градиенты `linear-gradient()` и `conic-gradient()`

```css
div {
  /* Путь к изображению */
  background-image: url(img.png);
  /* Линейный градиент */
  background-image: linear-gradient(90deg, #fff, #fff);
}
```

:::

::: details `background-repeat`

```css
div {
  /* Повторение изображения */
  background-repeat: no-repeat;
}
```

:::

::: details `background-position`

```css
div {
  /* Позиционирование изображения (задние в px и %) */
  background-position: center center;
}
```

:::

::: details `background-size`

```css
div {
  /* Изображение полностью помещается в блок */
  background-size: contain;
  /* Изображение заполняет весь блок */
  background-size: cover;
  /* Задание в % */
  background-size: 50%;
}
```

:::

::: details `background-color`

```css
div {
  /* Цвет фона */
  background-color: #3b3b3b;
}
```

:::

::: details `background-attachment`

```css
div {
  /* Будет ли прокручиваться фоновое изображение */
  background-attachment: fixed;
}
```

:::

### Варианты записи свойств

**Полная форма записи**

```css
div {
  background-image: url(img.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
```

**Сокращенная форма записи**

```css
div {
  background: url(img.png) no-repeat center contain;
}
```
