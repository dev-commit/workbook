# HTML-теги: img, picture, source

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
