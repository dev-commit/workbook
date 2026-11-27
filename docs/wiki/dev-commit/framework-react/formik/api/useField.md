# `useField()`

## Информация

<v-sandbox needcheck url="https://codesandbox.io/s/formik-usefield-5z6lj" codesandbox />

::: info

- https://formik.org/docs/api/useField - Документация

:::

::: danger

**`useField()`** - хук

> - _return_ - Array

:::

- Автоматически подключает входные данные к Formik
- _Вызывается из дочернего компонента_
- Можно использовать для создания собственных пользовательских примитивов ввода

## Array

::: details field

- `name` - Имя элемента (атрибут name)
- `value` - Текущее value
- `onChange` - Function
- `onBlur` - Function

:::

::: details meta

- `value` - Текущее value
- `error` - undefined
- `touched` - false
- `initialValue` - value, заданное по умолчанию
- `initialTouched` - false
- `initialError` - undefined

:::

::: details helpers

- `setValue` - Function
- `setTouched` - Function
- `setError` - Function

:::

```jsx
import { useField } from "formik";

const Child = (props) => {
  // Простой вариант
  const [field, meta, helpers] = useField(props);
  // Деструктуризация
  const [, { value, touched, error }, { setTouched, setValue }] =
    useField(props);
};
```

## Варианты

### Простой Input

```jsx
const Input = ({ name, type }) => {
  const [field] = useField(name);

  return (
    <input
      type={type}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
    />
  );
};
```

```jsx
// Вызов
<Input name="userName" type="text" />
```

### Input с onChange

```jsx
const Input = ({ name, type }) => {
  const [field, , { setValue }] = useField(name);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      type={type}
      name={field.name}
      value={field.value}
      onChange={handleChange}
      onBlur={field.onBlur}
    />
  );
};
```

```jsx
// Вызов
<Input name="userName" type="text" />
```

### Input с Label

```jsx
const Input = ({ label, name, ...props }) => {
  const [field] = useField(name);

  return (
    <label>
      {label}
      <input {...field} {...props} />
    </label>
  );
};
```

```jsx
// Вызов
<Input name="userName" type="text" label="Name" />
```

### Input с обработкой ошибок

```jsx
const Input = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const hasError = Boolean(meta.touched) && Boolean(meta.error);

  return (
    <>
      <input {...field} {...props} />
      {hasError ? <h1>{meta.error}</h1> : null}
    </>
  );
};
```

```jsx
// Вызов
<Input name="userName" type="text" />
```

### Использование `setValue`

```jsx
const Counter = ({ name }) => {
  // Вместо прямого использования значений в "field"
  // используем "helpers" (setValue)
  const [field, , { setValue }] = useField(name);

  // console.log(field.value);

  return (
    <>
      <input type="button" onClick={() => setValue(5)} value="Count 5" />
      <input type="button" onClick={() => setValue(10)} value="Count 10" />
    </>
  );
};
```

```jsx
// Вызов
<Counter name="userCount" />
```

## Главный компонент

```jsx
import { Form, Formik } from "formik";

const App = () => {
  const initialFormData = {
    userName: "",
    userCount: 0,
  };

  const handleSubmit = (values, actions) => {
    // Может быть асинхронное действие
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialFormData} onSubmit={handleSubmit}>
      <Form>
        <Input name="userName" type="text" label="Name" />
        <Counter name="userCount" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```
