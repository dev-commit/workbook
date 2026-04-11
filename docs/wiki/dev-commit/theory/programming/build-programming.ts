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
      ["oop/info", `${emoji.theory}Информация`],
      ["oop/access-modifiers", "Модификаторы доступа"],
    ],
  },
  {
    title: "Принципы ООП",
    children: [
      ["oop/principles/encapsulation", `${emoji.items}1. Инкапсуляция`],
      ["oop/principles/inheritance", `${emoji.items}2. Наследование`],
      ["oop/principles/polymorphism", `${emoji.items}3. Полиморфизм`],
      ["oop/principles/abstraction", `${emoji.items}4. Абстракция`],
    ],
  },
  {
    title: "ФП",
    children: [
      ["fp/functional", `${emoji.theory}Информация`],
      ["fp/concept", `${emoji.fire}Концепции`],
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
      ["types/imperative", `${emoji.items}Императивное`],
      ["types/declarative", `${emoji.items}Декларативное`],
      ["types/reactive", `${emoji.items}Реактивное`],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
