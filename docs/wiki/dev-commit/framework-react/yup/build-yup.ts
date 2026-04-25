import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/yup/";
const title = "Yup";
const theme: TThemeTopics = "react";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/types", emoji.star + "Типы"],
      ["methods/methods", emoji.star + "Методы"],
      ["methods/test", getThemeMenu("method", [".test"])],
      ["methods/chain-values", "Связанные значения"],
      ["methods/reg-exp", "RegExp"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
