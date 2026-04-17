# cypress-visual-regression

Формирует файл с отличиями в вёрстке в "./cypress/snapshots/diff"
::: info
https://github.com/cypress-visual-regression/cypress-visual-regression
:::
npm i --save-dev cypress-visual-regression

## Настройки

```json
{
  "devDependencies": {
    "cypress": "^13.16.0",
    "cypress-visual-regression": "^5.2.2",
  }
}
```

```js
import { defineConfig } from "cypress";
import { configureVisualRegression } from "cypress-visual-regression";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    supportFile: "cypress/support/e2e.ts",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 1,
    },
    env: {
      visualRegressionType: "regression",
      visualRegressionBaseDirectory: "cypress/snapshot/base",
      visualRegressionDiffDirectory: "cypress/snapshot/diff",
      visualRegressionGenerateDiff: "always",
      visualRegressionFailSilently: false,
    },
    screenshotsFolder: "./cypress/snapshot/actual",
    // Подключаем плагин для сравнения скриншотов
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
    },
  },
});
```

```js
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "moduleResolution": "node"
  },
  "include": ["**/*.ts", "../cypress.config.ts"],
  "ts-node": {
    "transpileOnly": true,
    "compilerOptions": {
      "module": "ES2015"
    }
  }
}
```

## Директория cypress

- Внутри директорий "actual", "base" и "diff" одинаковый путь к изображению: \cypress\e2e\test.cy.ts\original.png

📂 cypress
	📂 e2e
		› test.cy.ts
    📂 snapshot
		📂 actual # Текущей скриншот экрана
		📂 base   # Изображение для сверки
		📂 diff   # Разница между текущим и базовым изображением
	📂 support
		› e2e.ts
    › tsconfig.json

```js
import { addCompareSnapshotCommand } from "cypress-visual-regression/dist/command";

addCompareSnapshotCommand({
  // Делать скриншот только видимой области элемента
  capture: "viewport",

  // Максимально допустимая разница между изображениями (от 0 до 1)
  // 0.1 означает, что различаться может не более 10% пикселей
  // errorThreshold: 0.1,
  errorThreshold: 0,

  // Настройки для сравнения отдельных пикселей
  pixelmatchOptions: {
    // Уровень чувствительности при сравнении пикселей (от 0 до 1)
    // 0 - пиксели должны быть абсолютно идентичными
    // Значения больше 0 позволяют небольшие различия в цвете
    threshold: 0.01,
  },
});
```

- original - название изображения для сверки из cypress\snapshot\base\cypress\e2e\test.cy.ts\original.png

```js
describe("Минимальный тест-кейс", () => {
  it("Создание скриншота", () => {
    // Делаем скриншот только для определенного блока 
    cy.get(".className").compareSnapshot("original");
  });
});
```
