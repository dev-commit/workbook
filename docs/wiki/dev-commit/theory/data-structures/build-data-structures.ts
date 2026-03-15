import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/data-structures/";
const title = "Структуры данных";
const theme: TThemeTopics = null;

// TODO:
const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/big-o-notation", emoji.theory + "Big-O Notation"],
    ],
  },
  // {
  //   title: "Структуры данных: линейные",
  //   children: [
  //     ["structures/stack", emoji.items + "Стек"],
  //     ["structures/queue", emoji.items + "Очередь"],
  //     ["structures/linked-list", emoji.items + "Связанный список"],
  //   ],
  // },
  // {
  //   title: "Структуры данных: остальные",
  //   children: [
  //     ["structures/set", emoji.items + "Множество"],
  //     ["structures/map", emoji.items + "Map"],
  //     ["structures/hash", emoji.items + "Хэш-таблица"],
  //     ["structures/list", emoji.items + "Список"],
  //     ["structures/graph", emoji.items + "Граф"],
  //     ["structures/tree", emoji.items + "Дерево"],
  //     ["structures/tree-prefix", emoji.items + "Префиксное дерево"],
  //     ["structures/heap", emoji.items + "Куча"],
  //   ],
  // },
  // {
  //   title: "Структуры данных в JS",
  //   children: [
  //     ["js/data-structures/map", getThemeMenu("method", ["Map", "WeakMap"])],
  //     ["js/data-structures/set", getThemeMenu("method", ["Set", "WeakSet"])],
  //   ],
  // },
  {
    title: "Примеры",
    children: [
      ["samples/multiple-checks", emoji.code + "Множественные проверки"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
