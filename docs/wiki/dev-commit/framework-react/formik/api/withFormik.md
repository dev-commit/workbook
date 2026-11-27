# withFormik

## Информация

<v-sandbox needcheck url="https://codesandbox.io/s/formik-withformik-ijecv" codesandbox />

::: info

- https://formik.org/docs/api/withFormik - Документация

:::

::: danger

**`withFormik()`** - HOC для подключения нативных элементов формы к Formik

:::

::: warning

- С Formik 2 вместо HOC можно использовать компонент `<Formik>` (с хуками `useField()` / `useFormikContext()` в дочерних компонентах) или хук `useFormik()`

:::

## Использование

```js
import { withFormik } from "formik";

const App = (props) => {
  //
};

export default withFormik({
  mapPropsToValues: () => {
    // ...
  },
  handleSubmit: () => {
    // ...
  },
  // ...
})(App);
```
