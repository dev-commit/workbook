# Таблицы

## Структура

### HTML-теги

| Тег       | Назначение                             |
| --------- | -------------------------------------- |
| `<table>` | Контейнер таблицы                      |
| `<thead>` | Контейнер для заголовка                |
| `<tbody>` | Контейнер для тела таблицы             |
| `<tfoot>` | Контейнер footer таблицы (опционально) |
| `<tr>`    | Строка таблицы (table row)             |
| `<th>`    | Ячейка заголовка (table header)        |
| `<td>`    | Ячейка с данными (table data)          |

### HTML-атрибуты

| Атрибут   | Описание                                                               |
| --------- | ---------------------------------------------------------------------- |
| `rowspan` | Объединение строки (применяется к `<td>`, н-р: `<td rowspan="2" />`)   |
| `colspan` | Объединение столбцов (применяется к `<td>`, н-р: `<td colspan="2" />`) |

---

## Варианты

### Простая таблица

- `<tfoot>` — необязательная секция для итоговой строки (или подписи внизу). При печати длинных таблиц браузер может повторять строки из `<tfoot>` на каждой странице.

<table>
  <thead>
    <tr>
      <th>Название</th>
      <th>Стоимость</th>
      <th>Количество</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Яблоки</td>
      <td>100 ₽</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Апельсины</td>
      <td>200 ₽</td>
      <td>20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Итого:</td>
      <td>300 ₽</td>
      <td>30</td>
    </tr>
  </tfoot>
</table>

::: details Код

```html
<table>
  <thead>
    <tr>
      <th>Название</th>
      <th>Стоимость</th>
      <th>Количество</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Яблоки</td>
      <td>100 ₽</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Апельсины</td>
      <td>200 ₽</td>
      <td>20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Итого:</td>
      <td>300 ₽</td>
      <td>30</td>
    </tr>
  </tfoot>
</table>
```

:::

### Объединение ячеек: rowspan и colspan

В одной таблице можно использовать и `rowspan`, и `colspan`. Пример: категория «Фрукты» объединяет две строки, строка «Итого» — два столбца.

<table>
  <thead>
    <tr>
      <th>Категория</th>
      <th>Название</th>
      <th>Цена</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Фрукты</td>
      <td>Яблоко</td>
      <td>80 ₽</td>
    </tr>
    <tr>
      <td>Груша</td>
      <td>60 ₽</td>
    </tr>
    <tr>
      <td>Овощи</td>
      <td>Морковь</td>
      <td>40 ₽</td>
    </tr>
    <tr>
      <td colspan="2">Итого</td>
      <td>180 ₽</td>
    </tr>
  </tbody>
</table>

::: details Код

```html
<table>
  <thead>
    <tr>
      <th>Категория</th>
      <th>Название</th>
      <th>Цена</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Фрукты</td>
      <td>Яблоко</td>
      <td>80 ₽</td>
    </tr>
    <tr>
      <td>Груша</td>
      <td>60 ₽</td>
    </tr>
    <tr>
      <td>Овощи</td>
      <td>Морковь</td>
      <td>40 ₽</td>
    </tr>
    <tr>
      <td colspan="2">Итого</td>
      <td>180 ₽</td>
    </tr>
  </tbody>
</table>
```

:::

### Стилизация таблицы

::: details Код

```css
table {
  border: 1px solid #ededed;
  border-collapse: collapse;
}
td,
th {
  padding: 5px 15px;
}
th {
  background: #b1dbbb;
  color: #4c4c4c;
}
tr:nth-child(odd) {
  background: #ededed;
  color: black;
}
```

:::
