# `<Formik />`

::: info
https://formik.org/docs/api/formik
:::

Обёртка для всех компонентов

```js
import { Formik } from "formik";

const App = () => {
  const initialValues = { userName: "" };

  const handleSubmit = (values, actions) => {
    // может быть асинхронное дейсвие
    console.log(values); // => {userName: "text" }
    // actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      ⚡️ `<Form />` и поля для обработки
    </Formik>
  );
};
```

## Props для `<Formik />`

```js
const App = () => {
  return (
    <Formik>
      {(props) => {
        console.log(props);
        return <>⚡️ `<Form />` и поля для обработки</>;
      }}
    </Formik>
  );
};
```

- props в `<Formik />` аналогичны тому, что возвращает useFormikContext

::: details props
- values Object
- errors Object
- touched Object
- status undefined
- handleChange Function
- handleBlur Function
- handleReset Function
- handleSubmit Function
- resetForm Function
- submitForm Function
- setErrors Function
- setFormikState Function
- setFieldTouched Function
- setFieldValue Function
- setFieldError Function
- setStatus Function
- setSubmitting Function
- setTouched Function
- setValues Function
- validateForm Function
- validateField Function
- validateOnBlur true
- validateOnChange true
- validateOnMount false
- isValidating false
- initialValues Object
- initialErrors Object
- initialTouched Object
- initialStatus undefined
- getFieldProps Function
- getFieldMeta Function
- getFieldHelpers Function
- isSubmitting false
- isValid true
- submitCount 0
- dirty false
- unregisterField Function
- registerField Function
:::

