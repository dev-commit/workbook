# Проверка значения на основе другого значения

## Варианты

### Проверка через `lessThan`

```js
const validationSchema = Yup.object().shape({
  start: Yup.number().lessThan(Yup.ref("end"), "Should less than End"),
  end: Yup.number(),
});
```

### Обращение через `this.parent`

- Нельзя использовать стрелочную функцию

```js
const validationSchema = Yup.object().shape({
  start: Yup.number().test("startValid", "So Big", function (value) {
    console.log(value, this.parent.end);
  }),
  end: Yup.number(),
});
```
