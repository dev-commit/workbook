# Create React App (react-app-rewired)

## Информация

::: info

- https://github.com/timarney/react-app-rewired
- https://github.com/oklas/react-app-rewire-alias
  :::

## Установка

```bash
npm i --save-dev react-app-rewired
npm i --save-dev react-app-rewire-alias
```

## Код

::: code-group

```js [config-overrides.js]
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@uicomponents": "src/hello/this/is/the/path/to/ui/components",
    "@lib": "lib", // in root of app outside of src
  })(config);

  return config;
};
```

```json [package.json]
{
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
}
```

:::
