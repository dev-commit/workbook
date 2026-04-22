# debounce()

::: info

- https://lodash.com/docs/4.17.15#debounce
  :::

## Установка

```bash
npm i --save lodash # Установка всего lodash
npm i --save lodash.debounce # Установка только lodash.debounce
```

## Использование

### Импорт

```js
import { debounce } from "lodash";
// или
import debounce from "lodash.debounce";
```

### Функциональный компонент

```js{12-19}
import { useState, useCallback } from "react";
import { debounce } from "lodash";

const App = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");

  const getResponse = async (value) => {
    const response = fetch("url");
    //
  };

  // с useCallback через 2 секунды выводит ПОСЛЕДНЕЕ value из input
  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    [],
  );

  // без useCallback через 2 секунды выводит ВСЕ value из input
  const debouncedGetResponse = debounce((value) => getResponse(value), 300);

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <input
        type="text"
        value={inputSearchValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </>
  );
};
```

### Классовый компонент

```js
import debounce from "lodash.debounce";

class App extends Component {
  constructor(props) {
    this.handleSearch = debounce(this.handleSearch, 500);
  }

  handleSearch = (value) => {
    //
  };
}
```
