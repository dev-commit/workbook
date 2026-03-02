# Шаблон для Topics

```ts
import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "system/ui-kit/";
const title = "Ui-Kit";
const theme: TThemeTopics = "node"; // null

const topics: ISidebarTopics[] = [
  {
    title: "Проработанные и не проработанные темы",
    children: [
      ["dir/file", "Тема проработана", "done"],
      ["dir/file", "Тема НЕ проработана", "check"],
    ],
  },
  {
    title: "Меню",
    children: [
      // Emoji
      ["dir/file", getTopicSubtitle("info")],
      ["dir/file", emoji.items + "Emoji"],
      // Код
      ["dir/file", getThemeMenu("method", ["method"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
```
