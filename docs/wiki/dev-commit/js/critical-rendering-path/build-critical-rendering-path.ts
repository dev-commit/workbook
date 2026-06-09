import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/critical-rendering-path/";
const title = "Rendering | Optimize";
const theme: TThemeTopics = "accent";

const topics: ISidebarTopics[] = [
  {
    title: "Рендеринг",
    children: [
      [
        "rendering/critical-rendering-path",
        emoji.fire + "Critical Rendering Path",
      ],
      ["rendering/repaint-and-reflow", emoji.fire + "Repaint & Reflow"],
      [
        "rendering/requestAnimationFrame",
        getThemeMenu("method", ["requestAnimationFrame"]),
      ],
    ],
  },
  {
    title: "Оптимизация",
    children: [
      ["optimization/optimization", emoji.fire + "Оптимизация загрузки"],
      ["optimization/website-loading", emoji.theory + "Загрузка веб-страницы"],
      ["optimization/caching", "Кэширование"],
      ["optimization/tree-shaking", "Tree shaking"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
