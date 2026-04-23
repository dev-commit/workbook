# Controlled Components

# Информация

::: tip Controlled Components

- **Controlled Components** (контролируемые / управляемые компоненты) - данные формы обрабатываются React-компонентом. value элемента устанавливается из state компонента
  :::

## Примеры

### input

```js
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <h1>{value}</h1>
    </>
  );
};
```
