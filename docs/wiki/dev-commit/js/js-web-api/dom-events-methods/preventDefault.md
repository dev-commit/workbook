# preventDefault

## Информация

::: danger

**`event.preventDefault()`** - отключение действия события по умолчанию

:::

```js
element.onclick = function (event) {
  event.preventDefault();
  // Аналогично preventDefault(), но дальнейший код не выполняется
  // return false;
};
```
