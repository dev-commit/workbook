# Хук useCallback()

::: info

- https://react.dev/reference/react/useCallback
  :::

::: danger

**`useCallback(factory, deps)`** - оборачивает коллбэк и его полностью возвращает. Необходим, чтобы функция не изменялась при новом рендере - кэшировалась, а также чтобы не было рекурсивных вызовов

> - `factory` - коллбэк
> - `deps` (dependencies) - массив, с указанием от чего зависит useCallback
> - _return_ - мемоизированный коллбэк

:::

::: tip Паттерн

```js
import { useCallback } from "react";

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

:::

## useMemo vs useCallback

#### useCallback

```js
// Возвращает саму функцию
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

#### useMemo

```js
// Возвращает результат выполнения функции
const memoizedValue = useMemo(() => {
  return doSomething(a, b);
}, [a, b]);
```

## Проблематика и решение

- В обычном состоянии при каждом ререндере компонента создается новая ссылка на функцию
- React использует неглубокое сравнение объектов (функции тоже объекты), чтобы определить, обновляется ли значение или нет
- Если функция используется в качестве dependencies в useEffect, то будет перерендер
- Если функция передается в качестве props в дочерний компонент, то будет перерендер дочернего компонента - даже с React.memo, т.к. каждый раз будет приходить новая ссылка

#### Решение через useCallback

- useCallback - мемоизирует ссылку на функцию, чтобы она НЕ пересоздавалась каждый раз при перерендере
- Мемоизированную ссылку можно прокинуть в дочерний компонент, обернутый в React.memo, при этом, у дочернего компонента не будет перерендера при перерендере родительского компонента (конечно, если не изменились другие props)

## Варианты

### Передача function в виде dependencies для useEffect

- Непонятен алгоритм, когда нужно передавать function в виде dependencies для useEffect
- Возможно, необходимо определить не передали ли новую функцию - если не поместить в dependencies, то вызовется не та

```js
import { useState, useEffect, useCallback } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);
  const foo = useCallback(() => {}, []);

  useEffect(() => {
    console.log("Effect");
  }, [foo]);

  console.log("Render");

  return <input type="text" value={value} onChange={onChange} />;
};
```

Output

1. Монтирование: "Render", "Effect"
2. Обновление (вызов setValue): "Render"

---

```js
import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);
  const foo = () => {};

  useEffect(() => {
    console.log("Effect");
  }, [foo]);

  console.log("Render");

  return <input type="text" value={value} onChange={onChange} />;
};
```

Output

1. Монтирование: "Render", "Effect"
2. Обновление (вызов setValue): "Render", "Effect"

### Примеры

### useCallback и useState

Не проверено

```js
import { memo, useState, useCallback } from "react";

const HookModalComponent = (props) => {
  const [input, setInput] = useState("");

  // В зависимости не нужно передавать setInput, потому что setInput не меняет свою ссылку
  // (не точно, проверить!)
  const handleInput = useCallback((event) => {
    setInput(event.currentTarget.value);
  }, []);

  return <input onInput={handleInput} />;
};

export const HookModal = memo(HookModalComponent, () => true);
```
