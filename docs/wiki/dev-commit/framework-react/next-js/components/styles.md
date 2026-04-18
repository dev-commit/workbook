# Стили

## CSS

- Глобальные стили в app/globals.css

### CSS Modules

App.jsx

```js
import styles from './App.module.css';

const App = () => {
    return (
        <h1 className={styles.header}>Header</h1>
    )
}

export default App;
```

App.module.css

```css
.header {
    color: yellowgreen;
}
```

## Sass

npm i --save sass

### CSS Modules

- Аналогично с CSS Modules, только импортируется файл App.module.scss
