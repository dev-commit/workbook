# Disable

## TypeScript

```js
// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
const res = await create(user.ac_id!, payload);
```

```js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
```

## Общее

### Весь файл

```js
// eslint-disable
disable для всего файла (прописывается в начале файла)
```

### Console Log

```js
// eslint-disable-next-line no-console
console.log('Hello');
```

### Контент ссылки

- В начале файла

```js
/* eslint-disable jsx-a11y/anchor-has-content */
```

### Пустая функция

```js
// eslint-disable-next-line @typescript-eslint/no-empty-function
<Formik onSubmit={() => {}}></Formik>
```

### Вложенность callbacks

- Обработка ошибки "Too many nested callbacks (4). Maximum allowed is 3" (цикл в цикле)

```js
// eslint-disable-next-line max-nested-callbacks
foo1(function() {
    foo2(function() {
        foo3(function() {
            foo4(function() {
                // Do something
            });
        });
    });
});
```
