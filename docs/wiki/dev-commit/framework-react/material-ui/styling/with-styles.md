# withStyles()

## Стилизация кнопки

Material.jsx

```js
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styles from './MaterialStyles';

const Material = ({ classes }) => {
    return (
        <div className={classes.container}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => { alert('clicked') }}
                classes={{ root: classes.root }}
            >
                Hello World
            </Button>
        </div>
    );
}

export default withStyles(styles)(Material);
```

MaterialStyles.js

```js
const MaterialStyles = () => ({
    container: {
        border: '2px solid blue',
    },
    root: {
        color: 'yellow' 
    }
});

export default MaterialStyles;
```

## Простой пример

Component.jsx

```js
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import styles from './ComponentStyles';

const Component = ({ classes }) => {
	return (
		<>
			<div className={classes.wrapper}></div>
			<div className={cn(classes.one, classes.two)}></div>
			<OtherComponent classes={{ root: classes.test }} />
		</>
	);
};

export default withStyles(styles)(Component);
```

ComponentStyles.js

```js
const ComponentStyles = () => ({
    wrapper: {
		mardin: '10px',
	},
	one: { },
	two: { }
});

export default ComponentStyles;
```
