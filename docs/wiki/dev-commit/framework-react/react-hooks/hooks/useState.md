# Хук состояния useState()

::: info

- https://react.dev/reference/react/useState
  :::

::: danger

**`useState(startState)`** - для использования внутреннего состояния в функциональном компоненте. React будет хранить это состояние между рендерами

> - `startState` - начальное состояние. Используется только при первом рендере
> - _return_ - [currentState, setStateFunction] - возвращает текущее значение состояния и функцию для его обновления

:::

::: tip Паттерн

```js
import { useState } from "react";

const [counter, setCounter] = useState(0);
setCounter(1);
```

:::

## Варианты

### 1. Базовый

- `counter` - текущее состоение
- `setCount(1)` - функция для изменения состояния
- `useState(0)` - начальное состоние "0"

```js{2,5}
const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

### 2. Функция-коллбэк в setCounter()

- _Хук работает асинхронно_
- Должен произойти цикл рендеринга, чтобы counter изменился

::: tip Паттерн

```js
const [counter, setCounter] = useState(0);

setCounter((prevCounter) => {
  // Если нужно точно основываться на предыдущем состоянии
  // Вернет текущее значение "counter"
  return prevCounter + 1;
});

// setCounter(prevCounter => prevCounter + 1)
```

:::

```js
const [counter, setCounter] = useState(0);

const increment = () => {
  setCounter(1);
  setCounter(2);
  // Установится ТОЛЬКО последнее значение
  setCounter(3);
};
```

<v-two compare :title="['Верно', 'Неверно']">
  <template #first>

```js
setCounter((prevCounter) => {
  return prevCounter + 1;
});
setCounter((prevCounter) => {
  return prevCounter + 1;
});
```

  </template>
  <template #last>

```js
setCounter(counter + 1);
// counter остался прежним
setCounter(counter + 1);
```

  </template>
</v-two>

### 3. State с объектами

::: tip Паттерн

```js
setCounter((prev) => {
  return {
    ...prev,
    title: "Новое значение",
  };
});
```

:::

```js
const [counter, setCounter] = useState({
  title: "Счетчик",
  data: Date.now(),
});
```

- Если передаем новый объект, то он полностью перезатирает состояние
- В отличие от классового компонента, он не совмещается с существующим

<v-two compare :title="['Верно', 'Неверно']">
  <template #first>

```js
setCounter((prev) => {
  return {
    ...prev,
    title: "Новое значение",
  };
});
```

  </template>
  <template #last>

```js
// Перезатрет "date"
setCounter({ title: "Новое значение" });
```

  </template>
</v-two>

### 4. Функция-коллбэк в useState(). Вычисление начального состояния

```js
const calc = () => {
  console.log("Some calculations");
};
```

<v-two compare :title="['Верно', 'Неверно']">
  <template #first>

```js
const App = () => {
  // оптимизация
  // 1 раз вычислит значение и больше не будет вызываться
  // calc() вызывается 2 раза при начальном рендеринге
  // calc() не вызывается при каждом обновлении state
  const [count, setCount] = useState(() => {
    return calc();
  });
};
```

  </template>
  <template #last>

```js
const App = () => {
  // calc() вызывается 2 раза при начальном рендеринге
  // calc() вызывается 2 раза при каждом обновлении state
  // т.к. при изменении state заново рендерится компонент
  const [count, setCount] = useState(calc());
};
```

  </template>
</v-two>

### 5. Объявление нескольких переменных состояния

- Хук состояния можно использовать в компоненте более одного раза
- Синтаксис деструктуризации массивов позволяет по разному называть переменные состояния, которые объявляем при вызове useState. Так как имён этих переменных нет в API useState, React предполагает, что если вы вызываете useState много раз, вы делаете это в одинаковой последовательности при каждом рендере

```js
const App = () => {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("Банан");
};
```

## Сравнение `useState()` и `this.setState`

**Отличия**

- Не сливает новое и старое состояние вместе
- Состояние может быть объектом

**Изменение состояния перерисовывает компонент**

1. `this.setState({ a: 1 })` -> `this.render()`
2. `useState()`
