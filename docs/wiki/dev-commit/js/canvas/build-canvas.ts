import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/canvas/";
const title = "Canvas";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/code", emoji.code + "Код"],
    ],
  },
  {
    title: "Фигуры",
    children: [
      ["figures/rectangle", getThemeMenu("method", ["Rectangle"])],
      ["figures/arc", getThemeMenu("method", ["Arc"])],
      ["figures/line-path", getThemeMenu("method", ["Line", "Path"])],
    ],
  },
  {
    title: "Элементы",
    children: [
      ["elements/gradient", "Gradient"],
      ["elements/text", "Text"],
      ["elements/text-gradient", "Text Gradient"],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/clearRect", getThemeMenu("method", ["clearRect"])],
      ["methods/scale", getThemeMenu("method", ["scale"])],
      ["methods/rotate", getThemeMenu("method", ["rotate"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;

