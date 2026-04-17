# withFormik

::: info
https://formik.org/docs/api/withFormik
:::

    HOC для подключение нативных элементов формы к Formik

```js
import { withFormik } from 'formik';

const App = (props) => {
    //
};

export default withFormik({
    mapPropsToValues: () => {...},
    handleSubmit: () => {...},
    ...
})(App);
```
