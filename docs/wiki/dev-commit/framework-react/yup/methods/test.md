# test

::: tip test

- **`.test`** - кастомная обработка value
  :::

## Методы

### `.test()`

```js
const validationSchema = Yup.object().shape({
  start: Yup.number().test("startValid", "So Big", (value) => {
    if (value > 10) {
      return false; // Ошибка валидации
    } else {
      return true; // Успешная валидация
    }
  }),
});
```

### `this.parent`

```js
const validationSchema = Yup.object().shape({
  start: Yup.number().test("startValid", "So Big", (value) => {
    // Сравнить со значением "end"
    if (value > this.parent.end) {
      return false;
    } else {
      return true;
    }
  }),
  end: Yup.number(),
});
```
