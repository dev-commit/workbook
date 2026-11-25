import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "docs/wiki/constants";

const path = rootPath + "js/js-string/";
const title = "String";
const theme: TThemeTopics = "js";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Методы",
    children: [
      ["methods/length", getThemeMenu("method", ["length"])],
      ["methods/trim", getThemeMenu("method", ["trim"])],
      ["methods/toString", getThemeMenu("method", ["toString"])],
      [
        "methods/toUpperCase",
        getThemeMenu("method", ["toUpperCase", "toLowerCase"]),
      ],
      ["methods/indexOf", getThemeMenu("method", ["indexOf", "lastIndexOf"])],
      ["methods/split", getThemeMenu("method", ["split"])],
      [
        "methods/substring",
        getThemeMenu("method", ["substring", "substr", "slice"]),
      ],
      ["methods/charAt", getThemeMenu("method", ["charAt", "charCodeAt"])],
      ["methods/startsWith", getThemeMenu("method", ["startsWith"])],
    ],
  },
  {
    title: "RegExp",
    children: [
      ["regexp/replace", getThemeMenu("method", ["replace"])],
      ["regexp/match", getThemeMenu("method", ["match", "exec"])],
      ["regexp/search", getThemeMenu("method", ["search"])],
      ["regexp/test", getThemeMenu("method", ["test"])],
    ],
  },
  {
    title: "Прочее",
    children: [["other/samples", "Примеры"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
