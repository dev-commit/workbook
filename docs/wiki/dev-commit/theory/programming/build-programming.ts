import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/programming/";
const title = "Программирование";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "ООП",
    children: [
      ["oop/info", emoji.theory + "Информация"],
      ["oop/access-modifiers", "Модификаторы доступа"],
    ],
  },
  {
    title: "Принципы ООП",
    children: [
      ["oop-principles/encapsulation", "1. Инкапсуляция"],
      ["oop-principles/inheritance", "2. Наследование"],
      ["oop-principles/polymorphism", "3. Полиморфизм"],
      ["oop-principles/abstraction", "4. Абстракция"],
    ],
  },
  {
    title: "ФП",
    children: [
      ["fp/info", emoji.theory + "Информация"],
      ["fp/concept", "Концепции"],
      ["fp/currying", "Каррирование"],
    ],
  },
  {
    title: "Теория",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/composition", "Композиция"],
    ],
  },
  {
    title: "Виды программирования",
    children: [
      ["types/imperative", "Императивное"],
      ["types/declarative", "Декларативное"],
      ["types/reactive", "Реактивное"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
