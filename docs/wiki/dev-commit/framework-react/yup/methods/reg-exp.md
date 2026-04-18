# RegExp (phone, site, password)

```js
const EMAIL_REGEXP: RegExp = /^[-._A-Za-z0-9]+@(?:[A-Za-z0-9][-a-z0-9]+\.)+[A-Za-z]{2,}|^$/;

emailPersonal: Yup.string()
    .matches(EMAIL_REGEXP, {
        message: 'forms.errorEmailValidation',
        excludeEmptyString: true,
    }),
```
