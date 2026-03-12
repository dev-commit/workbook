# box-sizing

## CSS-свойства

### `box-sizing`

::: details `box-sizing` - изменение алгоритма расчёта ширины и высоты элемента

| Значение      | Описание                                                                        |
| ------------- | ------------------------------------------------------------------------------- |
| `content-box` | Свойства width и height не включают в себя значения margin, padding и border    |
| `border-box`  | Свойства width и height включают в себя значения padding и border, но не margin |

```css
*,
:after,
:before {
  box-sizing: content-box;
  box-sizing: border-box;
}
```

:::
