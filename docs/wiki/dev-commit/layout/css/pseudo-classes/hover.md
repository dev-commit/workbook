# :hover, :focus, :active, :visited, :link

## CSS псевдоклассы

| Значение        | Описание             |
| --------------- | -------------------- |
| `a:hover`       | Наведение на элемент |
| `a:not(:hover)` | Уход с элемента      |
| `a:active`      | Активный элемент     |
| `a:focus`       | Элемент в фокусе     |
| `a:visited`     | Посещенная ссылка    |
| `a:link`        | Непосещенная ссылка  |

---

## Примеры

::: details Изменение цвета ссылки

```html
<a href="#">Link</a>
```

---

```css
a {
  transition: 0.4s;
}
a:hover {
  color: orange;
}
```

:::
