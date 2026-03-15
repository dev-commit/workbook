# background-clip

## Информация

::: info

- https://developer.mozilla.org/ru/docs/Web/CSS/Reference/Properties/background-clip - MDN
  :::

::: tip `background-clip`

- **background-clip** - определяет как цвет фона или фоновое изображение будут выводиться под границами блока
- При "text" - применяет к тексту градиент или изображение
  :::

| Значение      | Описание                                                                                     |
| :------------ | :------------------------------------------------------------------------------------------- |
| `border-box`  | Фон распространяется до внешнего края границы (но под границей в z-порядке)                  |
| `padding-box` | Фон распространяется до внешнего края отступа. Под границей фон не рисуется                  |
| `content-box` | Фон закрашивается внутри (обрезается) поля содержимого                                       |
| `text`        | [Экспериментальная возможность] Фон закрашивается внутри (обрезается) текста переднего плана |

## CSS-свойства

### `background-clip`

#### Префиксы

```css
div {
  -webkit-background-clip: text;
  background-clip: text;
}
```

#### Изображение на тексте

```css
span {
  outline: none;
  color: transparent;
  background: url(https://media.giphy.com/media/3o6Ztb45EYezY9x9gQ/giphy.gif);
  background-size: contain;
  background-position: top left;
  background-clip: text;
}
```

#### Градиент на тексте

```css
div {
  background: linear-gradient(right bottom, #162454, #533389, #0a9ed8, #7a359f);
  background-clip: text;
}
```

```css
div {
  background: linear-gradient(right bottom, #162454, #533389, #0a9ed8, #7a359f);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
