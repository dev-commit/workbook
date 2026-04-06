# Builder (Строитель)

## Информация

::: tip Определение

- **Builder** - позволяет создавать сложные объекты пошагово. Строитель даёт возможность использовать один и тот же код строительства для получения разных представлений объектов
- Паттерн Строитель нужен, если объект может существовать в разных вариациях или процесс инстанцирования состоит из нескольких шагов
  :::

## Пример

### Компонерт гамбургер с разными компонентами

```js
class BurgerBuilder {
  constructor(size) {
    this.size = size;
  }
  addPepperoni() {
    this.pepperoni = true;
    return this;
  }
  addCheeze() {
    this.cheeze = true;
    return this;
  }
  build() {
    return new Burger(this);
  }
}
const burger = new BurgerBuilder(14).addPepperoni().addCheeze();
```
