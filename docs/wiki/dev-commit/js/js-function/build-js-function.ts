import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-function/";
const title = "Function";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Замыкания",
    children: [
      ["closures/closures", emoji.theory + "Замыкания"],
      ["closures/environment", emoji.theory + "Области видимости"],
      ["closures/funarg", emoji.theory + "Фунарг-проблема"],
    ],
  },
  {
    title: "Функции",
    children: [
      ["function/info", getTopicSubtitle("info")],
      ["function/announcement", emoji.star + "Объявление"],
      ["function/arrow", emoji.star + "Стрелочные функции (ES6)"],
      ["function/parameters", emoji.star + "Параметры функции (ES6)"],
      ["function/arguments", "Arguments"],
      ["function/recursion", "Рекурсия"],
      ["function/named-function-expression", "Named Function Expression"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
