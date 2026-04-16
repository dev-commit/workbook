# `<Field />`

::: info
https://formik.org/docs/api/field
:::

Обёртка для элементов формы.

- Используется внутри `<Form />`
- Помещаются поля для обработки
- В минимальном варианте использование `<Form />` достаточно для обработки полей

```js
import { Formik, Form, Field } from "formik";

const App = () => {
  return (
    <Formik>
      <Form>
        <Field type="text" name="userName" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```

## Использование нативного `<input />`

- Вместо `<Field />` напрямую использовать `<input />` нельзя.
- Т.к. для `<input />` нужно обработать событие onChange и записать это в Formik

```html
<Field type="text" name="userName" />

<!-- Не сработает -->
<input type="text" name="userName" />
```

2 варианта обработки:

1. Обернуть `<input />` в `<Field />`
2. Использовать дочерний компонент наподобие `<Field />` и в нём изменить значение через хук `useField()`

## Оборачивание в `<Field />`

```html
<Field name="userName">
  {({ field, form }) => {
    return (
      <input
        type="text"
        onChange={(e) => form.setFieldValue(field.name, e.target.value)}
        value={field.value}
      />
    );
  }}
</Field>
```

