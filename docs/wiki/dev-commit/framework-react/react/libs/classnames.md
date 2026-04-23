# classnames

## Установка

```bash
npm i --save classnames
```

## Использование

### Базовый пример

```jsx
import cn from "classnames";

import styles from "./App.module.css";

const App = () => {
  return <div className={cn(styles.first, styles.second)}></div>;
};
```

### Применение условий

```jsx
const App = () => {
  const isError = true;

  return (
    <div className={cn(classes.first, { [classes.error]: isError })}></div>
  );
};
```
