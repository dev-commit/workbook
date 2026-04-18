# Проверка значения на основе другого значения

### Проверка черезlessThan

```js
const validationSchema = Yup.object().shape({
    start: Yup.number().lessThan(Yup.ref('end'), 'Should less than End'),
    end: Yup.number()
});
```

### Обращение черезthis.parent

- Нельзя использовать стрелочную функцию

```js
const validationSchema = Yup.object().shape({
    start: Yup.number().test("startValid", "So Big", function (value) {
        console.log(value, this.parent.end);
    }),
    end: Yup.number()
});
```
