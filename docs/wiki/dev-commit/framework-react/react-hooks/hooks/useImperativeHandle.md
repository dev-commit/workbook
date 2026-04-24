# Хук useImperativeHandle()

::: info

- https://react.dev/reference/react/useImperativeHandle
  :::

::: danger

**`useImperativeHandle()`** - настраивает значение экземпляра, которое предоставляется родительским компонентам при использовании ref. В большинстве случаев следует избегать императивного кода, использующего ссылки. useImperativeHandle должен использоваться с forwardRef

> - `ref` - ref
> - `createHandle` - createHandle
> - `[deps]` - [deps]

:::

::: tip Паттерн

```js
eImperativeHandle(ref, createHandle, [deps]);
```

:::
