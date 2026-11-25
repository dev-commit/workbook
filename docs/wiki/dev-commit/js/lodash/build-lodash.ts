import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "docs/wiki/constants";

const path = rootPath + "js/lodash/";
const title = "Lodash";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/install", getTopicSubtitle("install")]],
  },
  {
    title: "Методы",
    children: [
      ["methods/debounce", getThemeMenu("method", ["debounce"])],
      ["methods/isEqual", getThemeMenu("method", ["isEqual"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
