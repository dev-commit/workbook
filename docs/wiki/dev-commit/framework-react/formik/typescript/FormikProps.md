# FormikProps

```ts
interface Person {
  userName: string | undefined;
}
```

```tsx
import { FormikProps } from "formik";

const App = () => {
  return (
    <Formik>
      {(formikProps: FormikProps<Person>) => <Form>{/* ... */}</Form>}
    </Formik>
  );
};
```
