# `<FormSpy />`

- Через &lt;FormSpy /&gt; отслеживаю изменение состояния формы
- По итогу "value" в &lt;Textarea&gt; меняется
- "formProps.form.change()" не равносильно "&lt;Textarea onChange={} /&gt;"
- onChange - событие пользователи
- formProps.form.change() - сеттер

```js
import { Form, FormSpy } from 'react-final-form';

<Form>
    {(formProps) => (
        <form>
            <FormSpy
                subscription={{ values: true }}onChange={(formState: FormState<FormValues>) => {
                    formProps.form.change('clientField', 'Какие-то данные');
                }}
            />
            <Textarea
                name="clientField"
                value={formProps.values.clientField}
            />
        </form>
    )}
</Form>
```
