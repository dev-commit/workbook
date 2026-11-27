# useFormikContext

## Информация

<v-sandbox needcheck url="https://codesandbox.io/s/formik-context-basic-529ls" codesandbox title="Basic" />
<v-sandbox needcheck url="https://codesandbox.io/s/formik-context-validate-dh825" codesandbox title="Validation. Yup. validateField()" />

::: info

- https://formik.org/docs/api/useFormikContext - Документация

:::

::: danger

**`useFormikContext()`** - хук

> - _return_ - Object

:::

- Хук вернет все `state` Formik и `helpers` через React Context
- _Вызывается из дочернего компонента_
- Возвращаемый _Object_ аналогичен тому, что приходит в _props_ у `<Formik>`

::: details Object

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

## Использование

```jsx
import { useFormikContext } from "formik";

const Child = () => {
  const {
    values,
    setFieldValue,
    errors,
    // Остальные свойства
  } = useFormikContext();

  return <div>...</div>;
};
```
