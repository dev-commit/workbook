# ModuleFederationPlugin

## webpack.config.js

```js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const deps = require('./package.json').dependencies;
```

```js
module.exports = {
    plugins = [
        new ModuleFederationPlugin({
            // Уникальный идентификатор модуля для import .... from 'header/App'
            name: 'header',

            // Имя файла точки входа при выборке объединенного модуля
            // В этом файле будет весь экспорт приложения для внешних получателей
            // Будет связано в теге <script> в приложении, использующем этот модуль
            // remoteEntry.js - другой бандл, чьи некоторые части может импортировать host
            filename: 'remoteEntry.js',

            // Модули, которые доступны для импорта в текущем модуле
            remotes: {
                home: "home@http://localhost:3001/remoteEntry.js",
            },

            // Модули, которые будут доступны другим приложениям для импорта
            exposes: {
                './App': './src/App',
            },

            // Модули, которые могут быть общими для всего приложения
            shared: {
                ...deps,
                react: {
                    // Позволяет оставаться на текущей версии библиотеки,
                    // Даже если подгрузился remote с более новой версией
                    singleton: true,
                    // Требуемая версия
                    requiredVersion: deps.react,
                    // Связано с асинхронным режимом (?)
                    // Если "true", то не нужно указывать динамический импорт (?)
                    eager: true,

                    // Под этим именем общий модуль будет помещен в область общего доступа
                    shareKey: 'react',
                    // Будет использоваться область общего доступа с этим именем
                    shareScope: 'legacy',
                },
            },

            // Библиотека (?)
            library: {
                // Тип: 'var' | 'global'
                type: 'var',
                // Название
                name: 'header',
            },
            }),
    ];

    entry: './src/index',

    output: {
        publicPath: 'http://localhost:3003/',
    },
};
```
