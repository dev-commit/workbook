# Типы

## Варианты

```js
field: Yup.string(),
field: Yup.number(),
field: Yup.boolean(),
field: Yup.date(),
field: Yup.array(),
```

```js
field: Yup.object().shape({
  label: Yup.string(),
  value: Yup.number(),
}),
```
