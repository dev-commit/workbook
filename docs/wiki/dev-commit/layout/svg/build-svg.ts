import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/svg/";
const title = "SVG";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/props", emoji.code + "Свойства и атрибуты"],
    ],
  },
  {
    title: "Элементы",
    children: [
      ["elements/figure", emoji.star + "Фигуры"],
      ["elements/text", getThemeMenu("method", ["text"])],
      ["elements/image", getThemeMenu("method", ["image"])],
      ["elements/mask", getThemeMenu("method", ["mask"])],
      ["elements/clip-path", getThemeMenu("method", ["clipPath"])],
      ["elements/filters", getThemeMenu("method", ["filter"])],
      [
        "elements/gradients",
        getThemeMenu("method", ["linearGradient", "radialGradient"]),
      ],
      ["elements/background", "Background"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
