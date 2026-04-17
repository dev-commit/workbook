# Использование с Create React App

- Необходимо установить Create React App

### Главный файл

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Пакеты, входящие в состав Create React App

```js
{
	"dependencies": {
		"@babel/core": "7.9.0",
		"babel-jest": "^24.9.0",
		"babel-loader": "8.1.0",
		"babel-plugin-named-asset-import": "^0.3.6",
		"babel-preset-react-app": "^9.1.2",

		"@testing-library/jest-dom": "^4.2.4",
		"@testing-library/react": "^9.3.2",
		"@testing-library/user-event": "^7.1.2",

		"jest": "24.9.0",
		"jest-environment-jsdom-fourteen": "1.0.1",
		"jest-resolve": "24.9.0",
		"jest-watch-typeahead": "0.4.2"
	}
}
```
