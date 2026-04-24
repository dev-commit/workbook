# Хук useMemo()

::: info

- https://react.dev/reference/react/useMemo
  :::

::: danger

**`useMemo(factory, deps)`** - мемоизация

> - `factory` - коллбэк
> - `deps` (dependencies) - массив, с указанием от чего зависит useMemo
> - _return_ - мемоизированное значение

:::

::: tip Паттерн

```js
import { useMemo } from "react";

const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

:::

## Примеры

::: details Пример #1. Базовое использование

```js
import { useMemo, useState } from "react";

const App = () => {
  const [page, setPage] = useSate(1);

  const handleChange = useMemo(() => {
    setPage(2);
  }, [page]);
};
```

:::

::: details Пример #2. Функция со сложными вычислениями

```js
const complexCompute = (number) => {
  console.log("Очень ресурсоемкая функция");
  return number;
};
```

---

```js
const App = () => {
  const [number, setNumber] = useState(42);

  // Будет вызываться при любом изменении state
  // const computed = complexCompute(number)

  // Будет вызываться только при изменении "number"
  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  return (
    <>
      <h1>Вычисляемое свойство: {computed}</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Добавить</button>
    </>
  );
};
```

:::

::: details Пример #3. Использование объекта в state

```js
const App = () => {
  const [colored, setColored] = useState(false);

  // При изменении state, вызывается render и создается новый объект "styles",
  // а useEffect смотрит за старым объектов, видит что он изменился и поэтому вызывает коллбэк в useEffect
  // const styles = {
  //     color: colored ? 'dark' : 'light'
  // }

  // useMemo сохранит объект на следующий рендер
  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored],
  );

  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Styles</h1>
      <button onClick={() => setColored((prev) => !prev)}>Изменить</button>
    </>
  );
};
```

:::

::: details Пример #4. props

```js
const Component = ({ classes, checked }) => {
  const Foo = useMemo(
    () => <Element className={classes.base} checked={checked} />,
    [classes, checked],
  );

  return { Foo };
};
```

:::

## useMemo как замена useState

<v-sandbox url="https://codesandbox.io/s/usememo-kak-zamena-usestate-ujxvx" codesandbox />

- Для логики переключения состояния кнопки лучше использовать `useMemo`, чтобы вручную не менять через `useState`
- useMemo полностью заменяет `useState`

```js
import { useState, useMemo } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const isDisabledButton = useMemo(() => {
    if (value) {
      return false;
    }

    return true;
  }, [value]);

  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <button disabled={isDisabledButton}>Click</button>
    </>
  );
};

export default App;
```
