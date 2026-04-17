# Код

## import

webpack.config.js

```js
module.exports = {
    plugins = [
        new ModuleFederationPlugin({
            name: 'header',
            exposes: {
                './App': './src/App',
            },
        }),
    ];
};
```

App

#### 

```js
// Обычный импорт
import Header from 'header/App';

// Динамический импорт
const Header = React.lazy(() => import('header/App'));
```

#### 

```js
const App = () => (
	<>
        <Header />

		<React.Suspense fallback={null}>
			<Header />
		</React.Suspense>
	</>
)
```
