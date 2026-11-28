# pipe

## Реализация

### Реализация из статьи

```js
function pipe() {
  const args = Array.from(arguments);
  let result = args.shift();

  while (args.length) {
    const f = args.shift();
    result = f(result);
  }
  return result;
}

pipe(textFromFile, trim, sanitize, parse, extractData, send);
```
