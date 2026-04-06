# 1. The Single Responsibility Principle

## Информация

::: tip Определение

- **The Single Responsibility Principle** - Принцип единственной ответственности
- Каждый кдасс должен иметь одну обязанность (ответственность) и эта обязанность должна быть полностью инкапсулирована в класс. Он должен содержать поля и методы, относящиеся только к одному функционалу
- Для класса должна быть только 1 причина для изменения
  :::

### Принципы

- Разделение больших классов, реализующих разный функционал
- Слияние мелких классов и объединение в одном классе однотипоной функциональности (если определенная функциональность разбросана по разным классам, ее нужно собрать в одном классе)

### Результат применения

- В случаем возникновения изменений - задействовать наименьшее количество модулей
- Изменения, внесенные в класс, не затрагивают поведение других классов и не вызывают ошибок. Код проще читать, легче поддерживать и изменять

### Нарушение принципа

- **God object** (Божественный объект) - антипаттерн, представляющий собой класс в котором находится слишком много различного функционала

## Примеры

### Fitness Tracker

- Есть система, которая считает "Шаги" и "Скорость движения"
- При этом, другим разработчикам может потребоваться функционал отдельно для "Шагов" или "Скорости движения"

<v-two compare :title="['Хорошо', 'Плохо']">
  <template #first>

- Разделение классов по функционалу

```js
class Steps {
  constructor() {
    this.steps = 100;
  }
  getSteps() {
    return this.steps;
  }
}
class Speed {
  constructor() {
    this.speed = 200;
  }
  getSpeed() {
    return this.speed;
  }
}
```

- Объединение классов "Steps" и "Speed"

```js
class Tracker {
  constructor(steps, speed) {
    this.steps = steps;
    this.speed = speed;
  }
  getTracker() {
    const steps = this.steps.getSteps();
    const speed = this.speed.getSpeed();
    console.log(steps, speed); // 100, 200
  }
}

const tracker = new Tracker(new Steps(), new Speed());
tracker.getTracker();
```

  </template>
  <template #last>

- Обработка "Шагов" и "Скорости движения" в одном месте
- Если потребуется переиспользовать логику только "Шагов" - это не получится

```js
class Tracker {
  constructor() {
    this.steps = 100;
    this.speed = 200;
  }
  getTracker() {
    const steps = this.getSteps();
    const speed = this.getSpeed();
    console.log(steps, speed); // 100, 200
  }
  getSteps() {
    return this.steps;
  }
  getSpeed() {
    return this.speed;
  }
}

const tracker = new Tracker();
tracker.getTracker();
```

  </template>
</v-two>

## Применение в React

- На примере React компонента: компонент, который отрисовывает пользовательский интерфейс, не должен содержать в себе логику авторизации этого пользователя.
