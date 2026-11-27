# Валидация на onBlur, метод setFieldTouched

## Информация

<v-sandbox needcheck url="https://codesandbox.io/s/formik-setfieldtouched-wk6e5" codesandbox title="Валидация на onBlur" />

- Валидация происходит при _onBlur_: `setFieldTouched(name)` помечает поле как touched, и его ошибка выводится сразу
- Без этого у поля, которое не вызывает `handleBlur` (н-р, значение задаётся через `setFieldValue`), touched ставится только при нажатии на кнопку _submit_, и ошибка появится только после неё. Сама проверка по умолчанию идёт при change и blur (`validateOnChange`, `validateOnBlur`)
