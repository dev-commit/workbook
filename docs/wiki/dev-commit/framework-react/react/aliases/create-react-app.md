# Create React App (react-app-rewired)

::: info
https://github.com/timarney/react-app-rewired
https://github.com/oklas/react-app-rewire-alias
:::
npm i --save-dev react-app-rewired
npm i --save-dev react-app-rewire-alias
config-overrides.js

```js
const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@uicomponents': 'src/hello/this/is/the/path/to/ui/components',
        "@lib": "lib", // in root of app outside of src
    })(config)
    return config;
}
```package.json

```js
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```
