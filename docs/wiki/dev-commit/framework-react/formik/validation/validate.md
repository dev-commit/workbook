# `<Formik validate>`

## Информация

<v-sandbox needcheck url="https://codesandbox.io/s/formik-validate-gv4s5" codesandbox />

- Кастомная валидация полей

## Использование

```jsx
import { Formik } from "formik";

const App = () => {
  const validate = (values) => {
    if (!values.userName) {
      //
    }
    // ...
  };

  return <Formik validate={validate}>...</Formik>;
};
```
