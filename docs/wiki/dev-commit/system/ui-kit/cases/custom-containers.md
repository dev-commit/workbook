# Использование

## Конструкция

::: info

- https://vitepress.dev/guide/markdown.html#custom-containers - Default Title
  :::

- Значения: `tip`, `info`, `warning`, `danger`, `details`

```
::: tip
Данные
:::
```

## Элементы

### Ссылки `info`

::: info

- https://svelte.dev/docs/svelte/overview - Svelte
- https://www.shadcn-svelte.com/ - Shadcn Svelte Design System
  :::

### Check `warning`

::: warning

- Наследование свойств `inherit` (размер шрифта, стиль шрифта)
  :::

### Выпадающий список `details`

::: details `<input type="radio" />` - переключатели

- Чтобы связать переключатели, атрибут “name” должен быть одинаковым

```html
<input type="radio" name="radio" />
<input type="radio" name="radio" />
<input type="radio" name="radio" />
```

:::

### `tip`

> Не используется

::: tip Подсказка `tip`
Рекомендация или полезный совет.
:::

### `danger`

> Не используется

::: danger Опасность `danger`
Важное предупреждение или критичная информация.
:::
