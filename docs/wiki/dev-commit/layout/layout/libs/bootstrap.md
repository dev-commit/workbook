# Bootstrap

::: info

- https://getbootstrap.com/docs/4.3/getting-started/introduction/ - Документация
- https://bootstrap-4.ru/docs/4.3.1/getting-started/introduction/ - Документация на русском

:::

## Данные

- jQuery - все плагины зависят от jQuery

## Элементы

### Контейнеры

- `.container` - контейнер для фиксированной ширины
- `.row` - строки
- `.col` - колонки
- `.container-fluid` - контейнер для 100%-ной ширины
- `.d-flex` - display:flex

---

- Цифры в наименовании классов колонок показывают, сколько колонок из 12-ти возможных в ряду вы бы хотели использовать
- Так, если вы хотите использовать три колонки одной ширины, используйте `.col-sm-4`

### Колонки

- `col` - колонка
- `col-sm` - адаптивная колонка для sm(576px) и больше
- `col-4` - колонка, занимающая 4 ячейки из 12 в сетке

### CSS Media Queries

- `sm (576px)` - малые девайсы
- `md (768px)` - средние девайсы (планшеты)
- `lg (992px)` - большие девайсы (десктопы)
- `xl (1200px)` - экстрабольшие девайсы (большие десктопы)

## Примеры

<v-details title="Bootstrap Layout">
<v-iframe height="450" src="https://codepen.io/LetsCode-Dev/embed/NWVryPb" />
</v-details>
