# scroll-behavior

## Информация

> `scroll-behavior` - поведение скролла

| Значение | Описание                                        |
| -------- | ----------------------------------------------- |
| `auto`   | Мгновенный переход (по-умолчанию)               |
| `smooth` | Плавная прокрутка к элементу (применять к html) |

## Пример

- Плавная прокрутка к секции

```html
<a href="#second">Link</a>
<section id="first">First</section>
<section id="second">Second</section>
```

```css
html {
  scroll-behavior: smooth;
}
section {
  border: 1px solid #000;
  height: 100vh;
}
```
