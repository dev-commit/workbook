# FormikProps

```js
interface Person = {
  userName: string | undefined;
};
```

```js
import { FormikProps } from 'formik';

const App = () => {
    return (
    	<Formik>
			{(formikProps: FormikProps<Person>) => (
				<Form>
					//
				</Form>
			)}
    	</Formik>
    );
};
```
