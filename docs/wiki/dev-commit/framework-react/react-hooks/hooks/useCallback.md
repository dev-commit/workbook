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

<v-two :title="['useCallback', 'useMemo']">
  <template #first>

```js
// Возвращает саму функцию
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

  </template>
  <template #last>

```js
// Возвращает результат выполнения функции
const memoizedValue = useMemo(() => {
  return doSomething(a, b);
}, [a, b]);
```

  </template>
</v-two>

## Проблематика с ререндерами

### Проблематика

- В обычном состоянии при каждом ререндере компонента создается новая ссылка на функцию
- React использует неглубокое сравнение объектов (функции тоже объекты), чтобы определить, обновляется ли значение или нет
- Если функция используется в качестве dependencies в useEffect, то будет перерендер
- Если функция передается в качестве props в дочерний компонент, то будет перерендер дочернего компонента - даже с React.memo, т.к. каждый раз будет приходить новая ссылка

### Решение через useCallback

- `useCallback` - мемоизирует _ссылку на функцию_, чтобы она НЕ пересоздавалась каждый раз при перерендере
- Мемоизированную ссылку можно прокинуть в дочерний компонент, обернутый в `React.memo`, при этом, у дочернего компонента не будет перерендера при перерендере родительского компонента (конечно, если не изменились другие props)

## Варианты

### Передача function в виде dependencies для useEffect

::: warning

- Непонятен алгоритм, когда нужно передавать function в виде dependencies для useEffect
- Возможно, необходимо определить не передали ли новую функцию - если не поместить в dependencies, то вызовется не та
  :::

<v-sandbox url="https://codesandbox.io/s/usecallback-with-useeffect-8y5xd8" codesandbox />

<v-two compare :title="['useCallback', 'Basic']">
  <template #first>

```js{7,11}
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

  </template>
  <template #last>

```js{7,11}
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

  </template>
</v-two>

## Примеры

<v-sandbox url="https://codesandbox.io/s/usecallback-peredacha-funkcii-v-dependencies-yos1o" title="useCallback - передача функции в dependencies" codesandbox />
<v-sandbox url="https://codesandbox.io/s/usecallback-vs-usememo-qcdm7q" title="useCallback vs useMemo" codesandbox />

### useCallback и useState

::: warning

- Не проверено
  :::

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
