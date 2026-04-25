# makeStyles()

## Примеры

### Простой пример

```js
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    mardin: "10px",
  },
}));

const Component = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.label}></div>
    </>
  );
};
```

### Custom Hook useStyles

::: code-group

```js [Hook]
import React, { useMemo }  from 'react';
import { StyleRulesCallback } from '@material-ui/core';
import { Theme } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = (getStyles: StyleRulesCallback<Theme, {}>) => {
  const useMakeStyles = useMemo(
    () => makeStyles(getStyles),
    [getStyles]
  );

  return useMakeStyles();
}
```

```js [Component]
import React from "react";

import { useStyles } from "./useStyles";
import styles from "./AppStyles";

const App = () => {
  const classes = useStyles(styles);
  return <div className={classes.container}>Hello</div>;
};

export default App;
```

```js [Styles]
const AppStyles = () => ({
  container: {
    border: "2px solid blue",
  },
});

export default AppStyles;
```

:::

### Усложненный пример

```js
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
  statusButton: ({ color, selected }) => ({
    "&$statusButton": {
      backgroundColor: selected ? color : "transparent",
      color: selected ? WHITE : HEADER_CELL,
      "&:hover": {
        backgroundColor: color,
        color: WHITE,
      },
    },
  }),
});

const StatusButton = ({ color, selected }) => {
  const btnClasses = useStyles({ color, selected });
  return <Element classes={{ root: btnClasses.statusButton }} />;
};
```
