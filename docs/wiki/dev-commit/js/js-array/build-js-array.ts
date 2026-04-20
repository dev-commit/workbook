import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-array/";
const title = "Array";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/spread-array", emoji.fire + "Spread-оператор Array (ES6)"],
      ["main/destructive-array", emoji.fire + "Деструктуризация Array (ES6)"],
    ],
  },
  {
    title: "Циклы",
    children: [
      ["cycles/info", getTopicSubtitle("info")],
      ["cycles/map", getThemeMenu("method", ["map"])],
      ["cycles/forEach", getThemeMenu("method", ["forEach"])],
      ["cycles/reduce", getThemeMenu("method", ["reduce", "reduceRight"])],
      ["cycles/filter", getThemeMenu("method", ["filter"])],
      ["cycles/every", getThemeMenu("method", ["every", "some"])],
      ["cycles/for-while", getThemeMenu("method", ["for", "while"])],
    ],
  },
  {
    title: "Методы",
    children: [
      [
        "methods/push",
        getThemeMenu("method", ["push", "pop", "unshift", "shift"]),
      ],
      [
        "methods/length",
        getThemeMenu("method", ["length", "reverse", "concat"]),
      ],
      ["methods/sort", getThemeMenu("method", ["sort", "toSorted"])],
      ["methods/join", getThemeMenu("method", ["join"])],
      ["methods/slice", getThemeMenu("method", ["slice", "splice"])],
      ["methods/includes", getThemeMenu("method", ["includes"])],
      ["methods/indexOf", getThemeMenu("method", ["indexOf", "lastIndexOf"])],
      ["methods/find", getThemeMenu("method", ["find", "findIndex"])],
      ["methods/isArray", getThemeMenu("method", ["Array.isArray"])],
      ["methods/from", getThemeMenu("method", ["Array.from"])],
      ["methods/flat", getThemeMenu("method", ["flat"])],
      ["methods/flatMap", getThemeMenu("method", ["flatMap"])],
      ["methods/fill", getThemeMenu("method", ["fill"])],
      ["methods/at", getThemeMenu("method", ["at"])],
    ],
  },
  {
    title: "Примеры",
    children: [["samples/samples", "Примеры"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
