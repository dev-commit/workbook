# classnames

npm i --save classnames

## Импорт

```js
import cn from 'classnames';
```

## Примеры

### Простой пример

```js
<div className={cn(classes.first, classes.second)}</div>
```

### Использование CSS-in-JS

```js
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const App = ({ classes }) => (
    <div className={classes.container}></div>
);

export default withStyles(styles)(App);
```

### Применение условий

```js
const isError = true

<div className={cn(classes.first, { [classes.error]: isError })}></div>
```
