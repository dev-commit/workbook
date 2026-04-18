# Методы

### General

```js
field: Yup.string()
    .min(10, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .nullable()
```

### String

```js
field: Yup.string()
    .length(10, 'Text')
    .email('Email')
    .url('URL')
    .uuid('Text')
    .ensure()
    .trim('Text')
    .lowercase('Text')
    .uppercase('Text')
```

### Number

```js
field: Yup.number()
    .lessThan(10)
    .moreThan(10)
    .positive('Text')
    .negative('Text')
    .integer('Text')
    .truncate()
    .round('floor' | 'ceil' | 'trunc' | 'round')
```

### Array

```js
field: Yup.array
    .of(type: Schema)
    .length(10, 'Text')
    .ensure()
    .compact(rejector: (value) => boolean)
```

```js
field: Yup.array().of(Yup.string()),
field: Yup.array().of(Yup.string().min(2)),
```

### Object

```js
field: Yup.object
    .shape(fields: object, noSortEdges?: Array<[string, string]>)
    .pick(keys: string[])
    .omit(keys: string[])
    .getDefaultFromShape(): Record < string, unknown >
    .from(fromKey: string, toKey: string, alias: boolean = false)
    .noUnknown(onlyKnownKeys: boolean = true, message?: string | function)
    .camelCase()
    .constantCase()
```
