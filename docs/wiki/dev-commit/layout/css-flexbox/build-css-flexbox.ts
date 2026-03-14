import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/css-flexbox/";
const title = "Flexbox";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/margin-behavior", "Поведение margin"],
    ],
  },
  {
    title: "Flex-контейнер",
    children: [
      ["flex-container/display", getThemeMenu("method", ["display", "gap"])],
      [
        "flex-container/flex-flow",
        getThemeMenu("method", ["flex-direction", "flex-wrap"]),
      ],
      [
        "flex-container/justify-content",
        getThemeMenu("method", [
          "justify-content",
          "align-items",
          "align-content",
        ]),
      ],
    ],
  },
  {
    title: "Flex-элементы",
    children: [
      [
        "flex-elements/flex",
        getThemeMenu("method", ["flex-grow", "flex-shrink", "flex-basis"]),
      ],
      ["flex-elements/order", getThemeMenu("method", ["order"])],
      ["flex-elements/align-self", getThemeMenu("method", ["align-self"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
