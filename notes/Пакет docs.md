# Вариант без относительных путей: пакет docs + tsx

## Ошибка алиаса "docs" при использовании в build

- `import { getTopicSubtitle, getThemeMenu } from "docs/utils"` - подключение
- Ошибка в "/.vitepress/config.ts"
- Причина: Конфиг VitePress подгружается до того, как применяется vite.resolve.alias, поэтому при разборе цепочки config → builder → build-ui-kit импорт "docs/utils" не резолвится и возникает ERR_MODULE_NOT_FOUND.

## Решение

1. Пакет docs (npm workspace)

- В docs/package.json: "name": "docs", "exports": { "./_": "./_" }.
- В корневом package.json: "workspaces": ["docs"].
- После npm install в node_modules появляется симлинк docs → корневая папка docs, и импорты вида docs/utils, docs/types резолвятся как у обычного пакета при загрузке конфига.

2. Загрузка .ts при старте

При загрузке конфига Node подгружает docs/utils.ts и т.п. Без загрузчика TypeScript он ищет docs/constants без расширения и падает. Поэтому скрипты запускаются с загрузчиком tsx:

- В package.json добавлена зависимость tsx.
- Скрипты dev, build, preview вызывают vitepress так: NODE_OPTIONS='--import tsx' vitepress ... docs.

3. Возврат импортов через алиас

- В build-ui-kit.ts и build-html.ts используются импорты docs/types, docs/utils, docs/constants вместо относительных путей.
- В итоге можно везде писать import ... from "docs/..." без относительных путей. Алиас docs в vite.resolve.alias в конфиге можно оставить для сборки фронта или убрать — резолв при загрузке конфига идёт через пакет docs.
