# `<Formik validate>`

- Кастомная валидация полей

```js
import { Formik } from "formik";

const App = () => {
  const validate = (values) => {
    if (!values.userName) {
      //
    }
    // ...
  };

  return (
    <Formik validate={validate}>
      {/* ... */}
    </Formik>
  );
};
```

