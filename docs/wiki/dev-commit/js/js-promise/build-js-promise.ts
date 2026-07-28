import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-promise/";
const title = "Promise";
const theme: TThemeTopics = "js";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Методы",
    children: [
      ["methods/new", getThemeMenu("method", ["new Promise"])],
      [
        "methods/then-catch-finally",
        getThemeMenu("method", [".then", ".catch", ".finally"]),
      ],
      [
        "methods/resolve-reject",
        getThemeMenu("method", ["Promise.resolve", "Promise.reject"]),
      ],
      [
        "methods/all-rase",
        getThemeMenu("method", ["Promise.all", "Promise.race"]),
      ],
      [
        "methods/allSettled",
        getThemeMenu("method", ["Promise.allSettled"]),
        "done",
      ],
      ["methods/any", getThemeMenu("method", ["Promise.any"])],
    ],
  },
  {
    title: "Примеры",
    children: [
      ["samples/common", "Общие задачи"],
      ["samples/then", getThemeMenu("method", [".then"])],
      ["samples/catch", getThemeMenu("method", [".catch"])],
      ["samples/finally", getThemeMenu("method", [".finally"])],
      ["samples/async", getThemeMenu("method", ["async await", "setTimeout"])],
      ["samples/race", getThemeMenu("method", ["Promise.all", "Promise.race"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
