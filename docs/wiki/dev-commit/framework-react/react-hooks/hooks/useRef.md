# Хук useRef()

## Информация

::: info

- https://react.dev/reference/react/useRef
  :::

::: danger

**`useRef(initialValue)`** - похож на useState и также создает состояние. Состояние, определенное через useRef сохраняется между ренедерами компонента, но при этом при изменении значения useRef не происхожит перерендера

> - `initialValue` - начальное состояние
> - _return_ - объект со свойством current

:::

::: tip Паттерн

```js
import { useRef } from "react";

const refContainer = useRef(initialValue);
```

:::

- useRef возвращает изменяемый _ref-объект_, свойство `.current` которого инициализируется переданным аргументом _initialValue_. Возвращённый объект будет сохраняться в течение всего времени жизни компонента

#### Назначение

1. Получение ссылок на DOM - элементы (задание фокусов на элементы)
2. Сохранение мутируемого значения (props, state)
3. Получение значений предыдыдущего state

## Сравнение `useRef` и `useState`

**`useRef`**

- После изменения не вызывается перерендер
- Хранение состояния напрямую не связанному с JSX

**`useState`**

- После изменения вызывается перерендер
- Хранение состояния связанного с JSX

## Применение для сохранения мутируемого значения (н-р: props)

- Хук удобен для сохранения любого мутируемого значения, по аналогии с тем, используются поля экземпляра в классах
- Это возможно, поскольку useRef() создаёт обычный JavaScript-объект. Единственная разница между useRef() и просто созданием самого объекта {current: ...} - это то, что _хук useRef даст один и тот же объект с рефом при каждом рендере_
- useRef не уведомляет, когда изменяется его содержимое. Мутирование свойства .current не вызывает повторный рендер. Если необходимо запустить некоторый код, когда React присоединяет или отсоединяет реф к узлу DOM, можно использовать колбэк-реф вместо этого

## Примеры

### Получение ссылки на DOM-элемент

```js
import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Получение элемента
    alert(inputRef.current.value);
    // Установка фокуса
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Ok</button>
    </div>
  );
};
```

### Посчитать, сколько раз рендерили компонент

```js
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      {renderCount.current}
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
```

### Сохранение значения `props`

- props мутировать нельзя, поэтому если нужно изменить, то помещаем в useRef / useState

**`useRef`**

```js
const Component = ({ hint }) => {
  const hintRef = useRef(hint);
  hintRef.current = "Новое значение";
};
```

**`useState`**

```js
const Component = ({ hint }) => {
  const [hintData, setHintData] = useState(hint);
  setHintData("Новое значение");
  return <Tooltip title={hintData} />;
};
```

### Получение значений предыдыдущего state

- Получить значение предыдущего "value" (что было до рендера)
- С помощью useState нельзя сделать

```js
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [value, setValue] = useState("initial");
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <div>Прошлое состояние: {prevValue.current}</div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
```
