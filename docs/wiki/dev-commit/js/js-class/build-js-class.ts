import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-class/";
const title = "Class";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/inheritance", emoji.fire + "Наследование"],
      [
        "main/prototype",
        getThemeMenu("method", ["__proto__", "prototype"]),
      ],
      ["main/new", getThemeMenu("method", ["new"])],
      ["main/constructor", getThemeMenu("method", ["constructor"])],
      ["main/return", getThemeMenu("method", ["return"])],
      ["main/new-target", getThemeMenu("method", ["new.target"])],
    ],
  },
  {
    title: "Классы ES6+",
    children: [
      ["class-es6/info", emoji.theory + "Теория"],
      ["class-es6/item-create", emoji.star + "1. Создание класса"],
      ["class-es6/item-inherit", emoji.star + "2. Наследование"],
      ["class-es6/item-getter", emoji.star + "3. Геттеры и Сеттеры"],
      [
        "class-es6/item-static",
        emoji.star + "4. Статические свойства и методы",
      ],
      ["class-es6/class-properties", "Свойства классов"],
      ["class-es6/expression", "Выражения классов"],
    ],
  },
  {
    title: "Классы ES5 «Функциональный стиль»",
    children: [
      ["class-es5-functional/create", "Объявление"],
      ["class-es5-functional/methods-private", "Приватный метод"],
      [
        "class-es5-functional/getters-and-setters",
        "Геттеры и сеттеры",
      ],
      ["class-es5-functional/inherit", "Наследование"],
    ],
  },
  {
    title: "Классы ES5 «Прототипный стиль»",
    children: [
      ["class-es5-prototype/info", emoji.theory + "Теория"],
      ["class-es5-prototype/methods", "Добавление методов"],
      ["class-es5-prototype/inherit", "Наследование классов"],
      ["class-es5-prototype/mixins", "Примеси"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
