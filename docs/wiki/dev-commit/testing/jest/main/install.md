# Установка и настройка

## Установка

```bash
npm i --save-dev jest
```

```json
{
  "name": "app-jest",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^25.2.7"
  }
}
```

## Написание собственного "expect"

```js
function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) {
        console.log("Success");
      } else {
        console.error("Error", value, exp);
      }
    },
  };
}

const sum = (a, b) => a + b;

expect(sum(41, 1)).toBe(42);
```

## Именование файлов тестов

- intro.test.js
- intro.spec.js
