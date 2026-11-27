# `<Formik />`

## Информация

::: info

- https://formik.org/docs/api/formik - Документация

:::

::: danger

**`<Formik />`** - обёртка для всех компонентов

:::

## Использование

```jsx
import { Formik } from "formik";

const App = () => {
  const initialValues = {
    userName: "",
  };

  const handleSubmit = (values, actions) => {
    // Может быть асинхронное действие
    console.log(values); // => { userName: "text" }
    // actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {/* ⚡️ <Form /> и поля для обработки */}
    </Formik>
  );
};
```

## Props для `<Formik />`

```jsx
const App = () => {
  return (
    <Formik>
      {(props) => {
        console.log(props);
        return <>{/* ⚡️ <Form /> и поля для обработки */}</>;
      }}
    </Formik>
  );
};
```

- _props_ в `<Formik>` аналогичны тому, что возвращает _useFormikContext_

::: details props

**data**

- `values` - Object
- `errors` - Object
- `touched` - Object
- `status` - undefined

**handlers**

- `handleChange` - Function
- `handleBlur` - Function
- `handleReset` - Function
- `handleSubmit` - Function
- `resetForm` - Function
- `submitForm` - Function

**setters**

- `setErrors` - Function
- `setFormikState` - Function
- `setFieldTouched` - Function
- `setFieldValue` - Function
- `setFieldError` - Function
- `setStatus` - Function
- `setSubmitting` - Function
- `setTouched` - Function
- `setValues` - Function

**validate**

- `validateForm` - Function
- `validateField` - Function
- `validateOnBlur` - true
- `validateOnChange` - true
- `validateOnMount` - false
- `isValidating` - false

**initial**

- `initialValues` - Object
- `initialErrors` - Object
- `initialTouched` - Object
- `initialStatus` - undefined

**getters**

- `getFieldProps` - Function
- `getFieldMeta` - Function
- `getFieldHelpers` - Function

**other**

- `isSubmitting` - false
- `isValid` - true
- `submitCount` - 0
- `dirty` - false
- `unregisterField` - Function
- `registerField` - Function

:::
