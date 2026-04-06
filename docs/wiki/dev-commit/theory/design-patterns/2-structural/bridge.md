# Bridge (Мост)

## Информация

::: tip Определение

- **Bridge** - разделяет один или несколько классов на несколько отдельных иерархий: абстракция и реализация. Что в свою очередь помогает изменять их без зависимостей друг от друга
- Отказ от корневого класса и замена всего на "абстракцию" и "реализацию"
- Замена наследования композицией
  :::

::: tip Абстракция и Реализация

- **Абстракция** - обёртка, которая сама не выполняет работу, а делегирует ее одному из объектов реализации
- **Реализация** - объект, в котором описана сама реализация
  :::

## Примеры

### Paint Cars

```js
// Описание модели авто
class Model {
  constructor(color) {
    this.color = color;
  }
}
// Описание цвета авто
class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}
```

```js
// Подклассы по цвету (работают только с классом Color, но не с Model)
class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
}
class SilbrigColor extends Color {
  constructor() {
    super("Silbermetallic");
  }
}
```

```js
// Подклассы по модели (работают только с классом Model, но не с Color)
// Нет прямого взаимодействия с классом Color, а делегирование и вызов метода "get"
// Класс Color - мост, которые вызыват метод "get"
class Audi extends Model {
  constructor(color) {
    super(color);
  }
  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}
class Bmw extends Model {
  constructor(color) {
    super(color);
  }
  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}
```

```js
const blackBmw = new Bmw(new BlackColor());
const a1 = blackBmw.paint(); // => "Auto: Bmw, Color: dark-black"
```
