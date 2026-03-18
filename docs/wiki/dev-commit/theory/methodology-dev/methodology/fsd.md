# Feature-Sliced Design (FSD)

::: info

- https://feature-sliced.github.io/documentation/ - Документация
  :::

## Пример, реализующий FSD

```
📂 app
├── 📂 routes
└── 📂 analytics
📂 pages
├── 📂 home
├── 📂 article-reader
│   ├── 📂 ui
│   └── 📂 api
└── 📂 settings
📂 shared
├── 📂 ui
└── 📂 api
```

## Определения

1. **Layers** - директории верхнего уровня: `📂 app`, `📂 pages`, `📂 shared`
2. **Slices** - директории внутри `📂 pages`. Они делят layer по доменной области (в данном случае по pages)
3. **Segments** - директории внутри `📂 app`, `📂 shared`, и `📂 pages/article-reader`. Они разделяют slices (или layers) по техническому назначению, т.е. по тому, для чего предназначен код
