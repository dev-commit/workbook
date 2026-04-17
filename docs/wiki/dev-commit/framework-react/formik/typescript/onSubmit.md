# onSubmit

```js
interface Person = {
  userName: string | undefined;
};
```

```js
import { FormikHelpers } from 'formik';

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

```js
export interface IFormikWrapperProps {
    onSubmit: FormikConfig<Person>['onSubmit'];
}

const FormikWrapper: React.FC<IFormikWrapperProps> = props => {
    return (
        <Formik onSubmit={props.onSubmit}>
            <Form>{props.children}</Form>
        </Formik>
    );
};
```
