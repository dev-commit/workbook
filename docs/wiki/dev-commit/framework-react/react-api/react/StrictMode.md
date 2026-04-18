# `<StrictMode>`

- При первой загрузке будет 2 рендера
- При каждом измнении state (или других вещей, влияющих на перерендер) - перерендер будет вызываться дважды

- **StrictMode** - позволяет находить распространенные ошибки в компонентах на ранних этапах разработки

#### Strict Mode включает следующие варианты поведения только для development:

- Компоненты будут повторно ререндериться, чтобы найти ошибки, вызванные impure rendering
- Компоненты повторно перезапускать Effects, чтобы найти ошибки, вызванные отсутствием Effect cleanup
- Компоненты будут проверены на использование deprecated API

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <div>Hello</div>
    </StrictMode>
);
```
