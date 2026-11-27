# `<Form />`

## Информация

::: info

- https://formik.org/docs/api/form - Документация

:::

::: danger

**`<Form />`** - обертка для формы

:::

## Использование

```jsx
import { Formik, Form } from "formik";

const App = () => {
  return (
    <Formik>
      <Form>
        {/* ⚡️ Поля для обработки */}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```
