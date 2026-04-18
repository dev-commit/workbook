# `<Field />`

## `Оборачивание компонента в<Field />`

### Код

```js
import { Field } from 'react-final-form';

const App = () = {
    return (
        <Field name={name}>
            {(fieldProps) => {
                // eslint-disable-next-line no-console
                console.log('fieldProps', fieldProps);

                return (
                    <Component />
                );
            }}
        </Field>
    );
}
```

### СтруктураfieldProps

```js
{
    "input": {
        "name": "documentIds",
        "value": ""
    },
    "meta": {
        "active": false,
        "data": {},
        "dirty": false,
        "dirtySinceLastSubmit": false,
        "invalid": false,
        "modified": false,
        "modifiedSinceLastSubmit": false,
        "pristine": true,
        "submitFailed": false,
        "submitSucceeded": false,
        "submitting": false,
        "touched": false,
        "valid": true,
        "validating": false,
        "visited": false
    }
}
```

### Пример

```js
import { Field } from 'react-final-form';

const App = () = > {
    return (
        <Field name={name}>
            {(fieldProps) => {
                const { input } = fieldProps;
                const { onChange } = input;

                // Если необходимо добавить собственную логику
                const handleChange = (e) => {
                    const result = e.target.value;
                    onChange(result);
                };

                return (
                    <input onChange={handleChange} />
                );
            
        </Field>
    );
}
```
