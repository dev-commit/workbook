# Markdown

## react-markdown

::: info
https://github.com/remarkjs/react-markdown
:::

```js
import Markdown from "react-markdown"

const markdown = "# Hi, *Pluto*!"

const App = () => {
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  )
}
```

---

## markdown-to-jsx

::: info
https://github.com/quantizor/markdown-to-jsx
:::

```js
import Markdown from "markdown-to-jsx"

const markdown = "# Hi, *Pluto*!"

const App = () => {
  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  )
}
```

---

## Cases

### Импорт Markdown из файла

- Markdown в файле "text.md"

```js
import { useState, useEffect } from "react"
import Markdown from "react-markdown"

const App = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    import(`./text.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setText(res))
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  })

  return (
    <div>
      <Markdown>{text}</Markdown>
    </div>
  )
}
```
