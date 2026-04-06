import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/refactoring/";
const title = "Рефакторинг";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Общее",
    children: [
      ["common/imports", emoji.star + "Порядок импортов"],
      ["common/version", "Политика версионирования"],
      ["common/prefix", "Префиксы для функций"],
      ["common/naming-conventions", "Соглашения об именованиях"],
    ],
  },
  {
    title: "Стандарты кода",
    children: [
      ["best-practices/dry", emoji.items + "DRY"],
      ["best-practices/kiss", emoji.items + "KISS"],
      ["best-practices/yagni", emoji.items + "YAGNI"],
      ["best-practices/code-smell", "Запахи кода"],
      ["best-practices/refactoring", "Рефакторинг"],
      ["best-practices/code-standart", "Стандарты кода"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
