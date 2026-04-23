# Uncontrolled Components

## Информация

::: tip Uncontrolled Components

- **Uncontrolled Components** (неконтролируемые / неуправляемые компоненты) - хранят данные формы в DOM, которые можно читать через ref
  :::

## Примеры

### useRef()

```js
import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    const value = inputRef.current.value;
    console.log(value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Ok</button>
    </div>
  );
};
```
