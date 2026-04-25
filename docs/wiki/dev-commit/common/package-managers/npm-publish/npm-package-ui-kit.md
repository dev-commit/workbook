# NPM-пакет: Ui Components

## Код

### Директория `src/`

> src/

::: code-group

```ts [index.ts]
export { UiButton } from "./ui/UiButton/UiButton";
export type { UiButtonProps } from "./ui/UiButton/UiButton";
```

:::

### Директория `src/ui/`

> src/ui/UiButton/

- Реализован обычный компонент

::: code-group

```tsx [UiButton.tsx]
import styles from "./styles.module.css";

export interface UiButtonProps {
  title: string;
}

export function UiButton({ title }: UiButtonProps) {
  return <button className={styles.button}>{title}</button>;
}
```

```css [styles.module.css]
.button {
  background: yellowgreen;
}
```

:::
