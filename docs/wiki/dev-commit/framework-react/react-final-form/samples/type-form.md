# Задание типа для компонента `<Form />`

```js
import { withTypes } from 'react-final-form';
import { Field } from 'react-final-form';

interface FormValues {
  firstName: string;
}

const { Form } = withTypes<FormValues>();

const App = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    ...
  );
};
```
