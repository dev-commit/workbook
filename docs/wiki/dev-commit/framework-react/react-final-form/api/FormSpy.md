# `<FormSpy />`

- Через `<FormSpy />` отслеживаю изменение состояния формы
- По итогу `value` в `<Textarea>` меняется
- `formProps.form.change()` - сеттер. не равносильно `<Textarea onChange={} />`
- `onChange` - событие пользователи

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
