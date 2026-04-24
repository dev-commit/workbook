# Стилизация

## CSS-модули

::: code-group

```tsx [App.tsx]
import { Button } from "@mantine/core";
import styles from "./styles.module.css";

const App = () => {
  return <Button className={styles.button}>Click</Button>;
};
```

```css [styles.module.css]
.button {
  background-color: yellowgreen;
}
```

:::
