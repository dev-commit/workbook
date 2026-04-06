# 3. The Liskóv Substitution Principle

## Информация

::: tip Определение

- **The Liskóv Substitution Principle** - Принцип подстановки Барбары Лиско́в
- Если модуль корректно работает с SuperClass, он также должен корректно работать с его наследником ChildClass: если заменить SuperClass на ChildClass, в приложении не должно быть ошибок
- ChildClass должен дополнять, а не изменять SuperClass и не должен противоречить поведению, заданному SuperClass
- Если ChildClass не способен выполнять те же действия, что и класс-родитель, возникает риск ошибок
  :::

### Результат применения

- Позволяет гарантировать, что любой созданный нами подкласс будет корректно использоваться ранее реализованными модулями, которые работали с классом-родителем

### Принцип помогает

- Выявлять проблемные абстракции и скрытые связи между сущностями
- Делать поведение модулей предсказуемым
- Вводить ограничение на наследование, чтобы потомки не противоречили базовому поведению

### Реализация

- Общий интерфейс для обоих классов
- Вместо наследования одного класса от другого использовать интерфейс

## Примеры

### Shape

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

  </template>
  <template #last>

  </template>
</v-two>

- Абстрактный класс

```js
class Shape {
  area() {
    // abstract class
  }
}
```

- Полиморфизм (различная реализация для area)

```js
class Square extends Shape {
  area() {
    return "Draw Square";
  }
}
class Circle extends Shape {
  area() {
    return "Draw Circle";
  }
}
```

- Класс AreaCalculator должен одинаково работать со всеми наследниками
- В данном случае проблем не возникнет, т.к. у каждого класса есть метод "area"

```js
class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }
  calc() {
    const res = this.shapes.map((item) => item.area());
    console.log(res);
  }
}
```

```js
const areaCalculator = new AreaCalculator([new Square(), new Circle()]);

areaCalculator.calc(); // => ["Draw Square", "Draw Circle"]
```

---

```js
class Square {
  constructor() {
    this.type = "square";
  }
}
class Circle {
  constructor() {
    this.type = "circle";
  }
}
```

```js
class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  calc() {
    const res = this.shapes.map((item) => {
      switch (item.type) {
        case "square":
          return "Draw Square";
          break;
        case "circle":
          return "Draw Circle";
          break;
        default:
          return "Draw Default";
      }
    });
    console.log(res);
  }
}
```

```js
const areaCalculator = new AreaCalculator([new Square(), new Circle()]);

areaCalculator.calc(); // => ["Draw Square", "Draw Circle"]
```

## Применение в React

- Пример с кнопками из "The Open Closed Principle": каждый вид кнопки, который расширил базовую, может использоваться вместо базовой без каких-либо изменений, соответственно выполняется прицип LSP.

::: details Пример с кнопкой из 'The Open Closed Principle'

```js
const Button = ({ onClick, children, className = "" }) => {
  return (
    <button className={`base-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const PrimaryButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} className="primary-button">
      {children}
    </Button>
  );
};

const IconButton = ({ onClick, icon, children }) => {
  return (
    <Button onClick={onClick} className="icon-button">
      <span className="icon">{icon}</span>
      {children}
    </Button>
  );
};
```

:::
