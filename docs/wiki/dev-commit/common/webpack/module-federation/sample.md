# Пример

webpack.config.js

```js
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = (env, argv) => {
    const plugins = [
        new ModuleFederationPlugin({
            name: 'uikit',
            library: { type: 'var', name: 'uikit' },
            filename: 'remoteEntry.js',
            remotes: {},
            exposes: require('./exposes.json'),
            shared: {
                react: {
                    eager: true,
                },
                'react-dom': {
                    eager: true,
                },
            },
        }),
    ];

    return {
        plugins,
    };
};
```

exposes.json

```js
{
	"./Accordion": "./exposes/Accordion.ts",
}
```

exposes

```js
// > exposes\Accordion.ts
export { Accordion as default } from '../src/Accordion';

// > src\Accordion\index.tsx
export { Accordion } from './Accordion';

// > src\Accordion\Accordion.tsx
export const Accordion = () => {}
```

public\index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<% if(htmlWebpackPlugin) { %>
	<script src="<%= htmlWebpackPlugin.options.hosts.uiKit.url %>/remoteEntry.js"></script>
	<% } %>
</head>
<body>
	<div id="root"></div>
</body>
</html>
```
