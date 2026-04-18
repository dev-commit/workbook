# Простой пример

```js
import { Form, Field } from 'react-final-form';

const App = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const error = {};

    if (!values.firstName) {
      error.firstName = "Текст ошибки";
    }

    return error;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={(formProps) => {
        const { handleSubmit, errors, values } = formProps;

        console.log(errors, values);

        return (
          <form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
            />
            <button type="submit">Submit</button>
          </form>
        );
      }}
    />
  );
};

export default App;
```
