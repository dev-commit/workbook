import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/yup/";
const title = "Yup";
const theme: TThemeTopics = "actual";

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
      ["methods/types", emoji.fire + "Типы"],
      ["methods/methods", emoji.fire + "Методы"],
      ["methods/test", getThemeMenu("method", [".test"])],
      ["methods/chain-values", emoji.code + "Связанные значения"],
      ["methods/reg-exp", emoji.code + "RegExp"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
