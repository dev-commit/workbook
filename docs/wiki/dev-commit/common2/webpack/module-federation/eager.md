# Eager Troubleshooting

::: info
https://webpack.js.org/concepts/module-federation/#troubleshooting
:::

```js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,

                    eager: false,
                    eager: true,
                },
            },
        }),
    ],
};
```

## eager: false или не указан

Uncaught Error: Shared module is not available for eager consumption: 
webpack/sharing/consume/default/react/react

### Решение: добавить динамический импорт

```js
import('./bootstrap');
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
```

## eager: true

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
```
