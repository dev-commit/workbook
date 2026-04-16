import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-ajax/";
const title = "Ajax";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Ajax",
    children: [
      ["ajax/info", emoji.theory + "Описание"],
      ["ajax/xmlhttprequest", "1. XMLHttpRequest"],
      ["ajax/fetch", "2. Fetch"],
    ],
  },
  {
    title: "Not Ajax",
    children: [["not-ajax/form-action", "Form Action"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;

