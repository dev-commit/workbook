import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/programming/";
const title = "ООП | ФП";
const theme: TThemeTopics = "theory";

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
    children: [["fp/info", emoji.theory + "Информация"]],
  },

  {
    title: "Концепции ФП",
    children: [
      ["fp-concept/currying", "Каррирование"],
      ["fp-concept/pure-functions", "Чистые функции"],
      ["fp-concept/higher-order-functions", "Функции высшего порядка"],
      ["fp-concept/immutability", "Иммутабельность"],
      ["fp-concept/first-class-functions", "Функции первого класса"],
      ["fp-concept/recursion", "Рекурсия"],
      ["fp-concept/lambda-calculus", "Лямбда-исчисление"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
