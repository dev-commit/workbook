# validationSchema

```js
type Person = {
    userName: string | undefined;
};
```

```js
import * as Yup from 'yup';

const getValidationSchema = (): Yup.SchemaOf<Person> =>
    Yup.object({
        userName: Yup.string()
    });

const App = () => {
    const validationSchema = getValidationSchema();

    return (...);
};
```
