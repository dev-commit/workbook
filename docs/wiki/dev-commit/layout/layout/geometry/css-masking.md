# CSS Masking

::: info

- https://drafts.fxtf.org/css-masking-1/#the-mask-image - Спецификация
- http://mpbox.ru/manuals/css-extensions/webkit/properties/webkit-mask-box-image.html - Описание свойств
- https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image - Mask Image
  :::

### CSS-свойства

- `webkit-mask`
- `webkit-mask-attachment`
- `webkit-mask-clip`
- `webkit-mask-composite`
- `webkit-mask-image`
- `webkit–mask-origin`
- `webkit-mask-position`
- `–webkit-mask-position-x`
- `–webkit-mask-position-y`
- `webkit-mask-repeat`
- `webkit-mask-size`
- `webkit-mask-box-image`

### `-webkit-mask-box-image`

<img src="../@img/css-masking.png" style="width: 450px" />

```html
<img
  class="img masking"
  src="https://images.unsplash.com/photo-1607274134639-043342705e6f"
/>`
```

```css
.masking {
  -webkit-mask-box-image: url(https://www.flaticon.com/svg/static/icons/svg/1384/1384017.svg);
}
.img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
```
