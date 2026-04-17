import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "testing/enzyme/";
const title = "Enzyme + Jest";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "API",
    children: [
      ["api/methods-render", emoji.star + "Методы рендеринга"],
      ["api/methods", emoji.star + "Методы"],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/other", getThemeMenu("method", ["..."])],
      ["methods/state", getThemeMenu("method", ["state"])],
      ["methods/props", getThemeMenu("method", ["props"])],
      ["methods/simulate", getThemeMenu("method", ["simulate"])],
      ["methods/debug", getThemeMenu("method", ["debug"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
