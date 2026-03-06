# Селекторы: >, +, ~

## Варианты селекторов

| Значение        | Описание                            |
| --------------- | ----------------------------------- |
| `ul li > span`  | Не все span, а только дочерние span |
| `ul li + li`    | Все последующие элементы li         |
| `.class1 ~ div` | Все div элементы после class1       |
| `.class1 ~ *`   | Все элементы после class1           |

## Примеры

::: details Пример использования селектора `>`
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/QWRNNNa" />
:::

::: details Custom Checkbox
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/BaezBQp" />
:::
