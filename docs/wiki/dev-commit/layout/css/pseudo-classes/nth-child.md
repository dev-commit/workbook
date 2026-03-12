# :first-child, :last-child, :nth-child

> CSS псевдоклассы для последовательности элементов

## CSS псевдоклассы

### `:first-child`, `:last-child`, `:nth-child`

| Значение           | Описание                                           |
| ------------------ | -------------------------------------------------- |
| `:first-child`     | Первый элемент (элементы должны быть в wrapper)    |
| `:last-child`      | Последний элемент (элементы должны быть в wrapper) |
| `:nth-child(2)`    | Второй элемент                                     |
| `:nth-child(2n)`   | Каждый второй элемент                              |
| `:nth-child(even)` | Каждый четный элемент                              |
| `:nth-child(odd)`  | Каждый нечетный элемент                            |

## Использование

```html
<div class="container">
  <div class="item">item-1</div>
  <div class="item">item-2</div>
  <div class="item">item-3</div>
  <div class="item">item-4</div>
</div>
```

```css
.item:first-child {
}
.item:last-child {
}
.item:nth-child(2) {
}
.item:nth-child(2n) {
}
.item:nth-child(even) {
}
.item:nth-child(odd) {
}
```
