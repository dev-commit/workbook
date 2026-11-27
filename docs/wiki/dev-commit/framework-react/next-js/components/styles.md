# Стили

## CSS

- Глобальные стили в _app/globals.css_

### CSS Modules

::: code-group

```jsx [App.jsx]
import styles from "./App.module.css";

const App = () => {
  return <h1 className={styles.header}>Header</h1>;
};

export default App;
```

```css [App.module.css]
.header {
  color: yellowgreen;
}
```

:::

## Sass

```bash
npm i --save sass
```

### CSS Modules

- Аналогично с CSS Modules, только импортируется файл _App.module.scss_
