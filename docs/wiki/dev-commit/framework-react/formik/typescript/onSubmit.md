# onSubmit

```ts
interface Person {
  userName: string | undefined;
}
```

```tsx
import { FormikHelpers } from "formik";

const App = () => {
  const handleSubmit = (
    values: Person,
    formik: FormikHelpers<Person>,
  ): void => {
    //
  };

  return (
    <FormikWrapper onSubmit={handleSubmit}>
      <Component />
      <button type="submit">Submit</button>
    </FormikWrapper>
  );
};
```

```tsx
export interface IFormikWrapperProps {
  onSubmit: FormikConfig<Person>["onSubmit"];
}

const FormikWrapper: React.FC<IFormikWrapperProps> = (props) => {
  return (
    <Formik onSubmit={props.onSubmit}>
      <Form>{props.children}</Form>
    </Formik>
  );
};
```

::: warning

- С `@types/react` 18 тип `React.FC` не добавляет `children` в props: их нужно объявить в интерфейсе (`children?: React.ReactNode`)

:::
