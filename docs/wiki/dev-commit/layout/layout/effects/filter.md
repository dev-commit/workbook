# filter и backdrop-filter

## Данные

**Для каких элементов применяется**

- Изображения
- Видео
- Другие элементы

## CSS-свойства

### `filter`, `backdrop-filter`

::: details `filter`

| Значение        | Описание                                                  |
| --------------- | --------------------------------------------------------- |
| `blur()`        | Размытие. Напрямую к body применить нельзя                |
| `brightness()`  | Яркость. 100% по умолчанию                                |
| `contrast()`    | Контрастность. 100% по умолчанию                          |
| `grayscale()`   | Черно-белое. 0% по умолчанию                              |
| `hue-rotate()`  | Поворот оттенка, определяет угол. 0deg по умолчанию       |
| `invert()`      | Инвертирование                                            |
| `opacity()`     | Прозрачность                                              |
| `saturate()`    | Изменение насыщенности                                    |
| `sepia()`       | Сепия                                                     |
| `drop-shadow()` | Добавляет тень к изображению, учитывая прозрачные участки |

```css
div {
  filter: blur(5px);
  filter: brightness(150%);
  filter: contrast(150%);
  filter: grayscale(70%);
  filter: hue-rotate(90deg);
  filter: invert(100%);
  filter: opacity(50%);
  filter: saturate(150%);
  filter: sepia(100%);
  filter: drop-shadow(10px 10px 3px orange);
}
```

**Применение нескольких фильтров**

- При использовании нескольких фильтров - первый применяется к исходному изображению, а остальные к предыдущему

```css
div {
  filter: contrast(150%) sepia(100%);
}
```

:::

::: details `backdrop-filter`

- Аналогичен `filter`, но работает только с фоном, не трогая сам элемент
- Значения такие же как у `filter`

```css
div {
  backdrop-filter: blur(10px);
  filter: blur(10px);
}
```

:::

### Примеры

<v-details title="Варианты применения filter">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/eYarEPY" />
</v-details>

<v-details title="Пример сравнения filter и backdrop-filter">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/LYoZXpG" />
</v-details>
