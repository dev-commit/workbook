# useField()

::: info
https://formik.org/docs/api/useField
:::

Хук

- Автоматически подключает входные данные к Formik
- Вызывается из дочернего компонента
- Можно использовать для создания собственных пользовательских примитивов ввода

Array

### Array

::: details field

- name Имя элемента (атрибут name)
- value Текущее value
- onChange Function
- onBlur Function

:::

::: details meta

- value Текущее value
- error undefined
- touched false
- initialValue value, заданное по умолчанию
- initialTouched false
- initialError undefined

:::

::: details helpers

- setValue Function
- setTouched Function
- setError Function

:::

```js
import { useField } from "formik";

const Child = () => {
  // простой вариант
  const [field, meta, helpers] = useField(props);
  // деструктуризация
  const [, { value, touched, error }, { setTouched, setValue }] =
    useField(props);
};
```

## Варианты

### Простой Input

```js
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

```html
<!-- Вызов -->
<input name="userName" type="text" />
```

### Input с onChange

```js
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

```html
<!-- Вызов -->
<input name="userName" type="text" />
```

### Input с Label

```js
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

```html
<!-- Вызов -->
<input name="userName" type="text" label="Name" />
```

### Input с обработкой ошибок

```js
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

```html
<!-- Вызов -->
<input name="userName" type="text" />
```

### ИспользованиеsetValue

```js
const Counter = ({ name }) => {
  // вместо прямого использования значений в "field"
  // используем "meta" и "helpers"
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

```html
<!-- Вызов -->
<Counter name="userCount" />
```

## Главный компонент

```js
import { Form, Formik } from "formik";
```

```js
const App = () => {
  const initialFormData = {
    userName: "",
    userCount: 0,
  };

  const handleSubmit = (values, actions) => {
    // может быть асинхронное дейсвие
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
