# Элементы формы

::: warning

- Наследование свойств `inherit` (размер шрифта, стиль шрифта)
  :::

::: info

- https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/button - MDN. Типы `<input />`
  :::

## HTML-теги

### `<input>`, `<textarea>`, `<select>,` `<button>`, `<form>`

::: details `<input type="text" />` - текстовое поле

- Простое текстовое поле

```html
<input type="text" />
```

:::

::: details `<input type="radio" />` - переключатели

- Чтобы связать переключатели, атрибут “name” должен быть одинаковым

```html
<input type="radio" name="radio" />
<input type="radio" name="radio" />
<input type="radio" name="radio" />
```

:::

::: details `<input type="checkbox" />` `<label />` - флажок, метка

- **`<label />`** - метка для checkbox

```html
<input type="checkbox" name="checkbox" />
```

**Вариант 1**

```html
<input type="checkbox" id="checkbox" />
<label for="checkbox">Нажми и выберется checkbox</label>
```

**Вариант 2**

```html
<label class="checkbox">
  <input type="checkbox" />
</label>
```

:::

::: details `<textarea />` - многострочное текстовое поле ввода

```html
<textarea>Текст</textarea>
```

---

```css
textarea {
  resize: none;
}
```

:::

::: details `<select />` `<option />` - выпадающий список

```html
<select>
  <option selected="">Пункт 1</option>
  <option>Пункт 2</option>
  <option>Пункт 3</option>
</select>
```

:::

::: details `<button />` - кнопка

```html
<button>Кнопка</button>
```

:::

::: details `<form />` - форма

```html
<form action="script.php" method="get">
  <input type="text" name="name" required="" />
  <textarea name="message"></textarea>
  <input type="submit" />
</form>
```

- Итоговый URL запроса: `http://test1.ru/script.php?name=myname&message=my+message`

:::

## HTML-атрибуты

### `placeholder`, `checked`, `selected`, `autofocus`, `disabled`, `readonly`, `min`, `max`

- `placeholder` - подсказка для input
- `checked` - нажатый radio или checkbox
- `selected` - выбранный option в select
- `autofocus` - фокус по умолчанию
- `disabled` - неактивное
- `readonly` - только чтение
- `min` - минимальное значение для input type="number"
- `max` - максимальное значение для input type="number"

## Варианты

<v-details title="Пример">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/WNBbEwz" />
</v-details>
