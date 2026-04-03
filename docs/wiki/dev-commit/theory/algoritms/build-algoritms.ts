import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/algoritms/";
const title = "Алгоритмы";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Big-O Notation",
    children: [
      ["big-o/info", emoji.theory + "Информация"],
      ["big-o/variants", emoji.star + "Варианты"],
      ["big-o/structure", "Структуры данных"],
      ["big-o/samples", "Примеры"],
    ],
  },
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Алгоритмы",
    children: [
      ["algoritms/sort", "Сортировка"],
      ["algoritms/search", "Поиск"],
      ["algoritms/string-reverse", "Переворот строки"],
      ["algoritms/hashing", "Хэширование"],
      ["algoritms/fibonacci", "Число Фибоначчи"],
      ["algoritms/factorial", "Факториал"],
    ],
  },
  {
    title: "Пададигмы",
    children: [
      ["paradigms/brute-force", "Brute-Force <br> (Метод грубой силы)"],
      [
        "paradigms/divide-and-conquer",
        "Divide and Conquer <br> (Разделяй и властвуй)",
      ],
      [
        "paradigms/dynamic-programming",
        "Dynamic Programming <br> (Динамич. программ.)",
      ],
      ["paradigms/greedy-algorithm", "Greedy Algorithm <br> (Жадный алгоритм)"],
      ["paradigms/backtracking", "Backtracking <br> (Поиск с возвратом)"],
      ["paradigms/local-search", "Local Search <br> (Локальный поиск)"],
      [
        "paradigms/transform-and-conquer",
        "Transform and Conquer <br> (Преобразуй и властвуй)",
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
