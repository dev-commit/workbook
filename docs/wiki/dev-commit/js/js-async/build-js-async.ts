import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-async/";
const title = "Async";
const theme: TThemeTopics = "js";

const topics: ISidebarTopics[] = [
  {
    title: "Ajax",
    children: [
      ["ajax/info", emoji.theory + "Описание"],
      ["ajax/xmlhttprequest", "1. XMLHttpRequest"],
      ["ajax/fetch", "2. Fetch"],
      ["ajax/AbortController", getThemeMenu("method", ["AbortController"])],
    ],
  },
  {
    title: "Not Ajax",
    children: [["not-ajax/form-action", "Form Action"]],
  },
  {
    title: "Асинхронный код",
    children: [
      ["async/collback", "1. Collback Function"],
      ["async/generators", "2. Generators (ES6)"],
      ["async/async-func", "3. Async Function (ES2017)"],
    ],
  },
  {
    title: "Таймеры",
    children: [
      [
        "timers/setTimeout",
        getThemeMenu("method", ["setTimeout", "setInterval"]),
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
