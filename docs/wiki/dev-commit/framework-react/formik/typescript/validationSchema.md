# validationSchema

<v-sandbox needcheck url="https://codesandbox.io/s/formik-yup-schemaof-iobrw" codesandbox />

```ts
type Person = {
  userName: string | undefined;
};
```

```tsx
import * as Yup from "yup";

const getValidationSchema = (): Yup.SchemaOf<Person> =>
  Yup.object({
    userName: Yup.string(),
  });

const App = () => {
  const validationSchema = getValidationSchema();

  return <div>...</div>;
};
```

::: warning

- В yup v1 тип `SchemaOf` удалён: вместо `Yup.SchemaOf<Person>` используется `Yup.ObjectSchema<Person>`

:::
