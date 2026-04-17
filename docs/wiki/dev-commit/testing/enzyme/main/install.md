# Установка

npm i --save-dev jest
npm i --save-dev enzyme enzyme-adapter-react-16

## setupTests.js

- Код из файла setupTests.js используется в каждом файле с тестами перед запуском тестов

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## package.json

```js
{
    "jest": {
        "verbose": true,
        "clearMocks": false,
        "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx)?$",
        // "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$",
        "setupFilesAfterEnv": [
            "<rootDir>/setupTests.js"
        ],
        "testPathIgnorePatterns": [
            "<rootDir>/(node_modules|.vscode)/"
        ],
        "collectCoverageFrom": [
            "**/src/**/*.{js,jsx}"
            // "src/components/**/*.{js,jsx}"
        ]
    }
}
```
