# Бесконечные Микротаски

- Повесить браузер микротасками

```js
const foo = () =>  {
    Promise.resolve()
        .then(() => {
            return foo();
        })
}

foo();
```
