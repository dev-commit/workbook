# Markdown

## Библиотеки

### `react-markdown`

::: info

- https://github.com/remarkjs/react-markdown
  :::

```js
import Markdown from "react-markdown";

const markdown = "# Hi, *Pluto*!";

const App = () => {
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};
```

### `markdown-to-jsx`

::: info

- https://github.com/quantizor/markdown-to-jsx
  :::

```js
import Markdown from "markdown-to-jsx";

const markdown = "# Hi, *Pluto*!";

const App = () => {
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};
```
