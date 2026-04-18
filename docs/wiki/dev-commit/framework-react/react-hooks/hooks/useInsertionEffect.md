# Хук useInsertionEffect()

::: info
https://react.dev/reference/react/useInsertionEffect
:::
useInsertionEffect предназначен для авторов библиотек CSS-in-JS. Если вы не работаете с библиотекой CSS-in-JS и вам не нужно место для внедрения стилей, вы, вероятно, захотите вместо этого использовать useEffect или useLayoutEffect.

    Версия useEffect, которая срабатывает перед любыми изменениями DOM
    
функция с Effect’s logic. Ваша setup function также может дополнительно возвращать функцию очистки. Прежде чем ваш компонент будет добавлен в DOM, React запустит вашу setup function. После каждого повторного рендеринга с измененными зависимостями React сначала запускает функцию очистки (если вы ее предоставили) со старыми значениями, а затем запускает setup function с новыми значениями. Прежде чем ваш компонент будет удален из DOM, React запустит вашу функцию очистки
(optional) список всех реактивных значений, на которые ссылается setup code
undefined

```js
import { useInsertionEffect } from 'react';

// Inside your CSS-in-JS library
const useCSS = (rule) => {
    useInsertionEffect(() => {
        // ... inject <style> tags here ...
    });

    return rule;
}
```
