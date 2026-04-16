import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-regexp/";
const title = "RegExp";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/use", getTopicSubtitle("use")],
    ],
  },
  {
    title: "Примеры",
    children: [
      ["samples/common", "Общее"],
      ["samples/symbols", emoji.items + "Символы"],
      ["samples/search", emoji.items + "Поиск по словам"],
      ["samples/operators", emoji.items + "Операторы"],
      ["samples/register", emoji.items + "Регистр"],
    ],
  },
  {
    title: "Прочее",
    children: [
      ["other/variants", emoji.code + "Варианты"],
      ["other/regexp-class", "Класс RegExp"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
