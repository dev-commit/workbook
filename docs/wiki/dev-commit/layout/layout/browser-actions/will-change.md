# will-change

::: info

- https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
  :::

- Уведомление браузера о том, что элемент изменит своё состояние
- Не надо ставить на каждый элемент
- Ставить ДО изменения и убирать ПОСЛЕ

```css
div {
  will-change: scroll-position;
  will-change: transform;
}
```
