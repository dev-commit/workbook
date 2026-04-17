import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";

import { rootPath } from "../../constants";

const path = rootPath + "backend/python/";
const title = "Python";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/cmd", "CMD"],
      ["main/base", "Базовые принципы"],
    ],
  },
  {
    title: "Типы данных",
    children: [
      ["data-types/data-types", "Типы данных"],
      ["data-types/string", "Строки"],
      ["data-types/array", "Списки (массивы)"],
    ],
  },
  {
    title: "Конструкции",
    children: [
      ["constructions/if", "Условный оператор if"],
      ["constructions/circle", "Циклы"],
      ["constructions/function", "Функции"],
    ],
  },
  {
    title: "ООП",
    children: [
      ["oop/class", "Классы, ООП"],
      ["oop/object", "Объекты (словари)"],
    ],
  },
  {
    title: "Прочее",
    children: [
      ["other/encode", "Изменение кодировки на utf-8"],
      ["other/docstring", "Строки документирования (docstring)"],
    ],
  },
  {
    title: "Модули",
    children: [
      ["modules/module", "Модули"],
      ["modules/pyowm", "Модуль определения погоды (pyowm)"],
    ],
  },
  {
    title: "Инструменты",
    children: [
      ["utils/MySQL", "MySQL"],
      ["utils/SQLAlchemy", "SQLAlchemy"],
      ["utils/Falcon", "Falcon"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
