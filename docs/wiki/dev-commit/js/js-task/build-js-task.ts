import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-task/";
const title = "Задачи";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Полифилы",
    children: [],
  },
  {
    title: "Объекты и Контекст",
    children: [
      [
        "polyphiles/object-create",
        getThemeMenu("method", ["Object.create"]),
        "done",
      ],
      ["polyphiles/bind", getThemeMenu("method", ["bind"])],
    ],
  },
  {
    title: "Массивы",
    children: [
      ["polyphiles/map", getThemeMenu("method", ["map"])],
      ["polyphiles/filter", getThemeMenu("method", ["filter"])],
      ["polyphiles/reduce", getThemeMenu("method", ["reduce"])],
      ["polyphiles/flat", getThemeMenu("method", ["flat"]), "done"],
    ],
  },
  {
    title: "Асинхронность",
    children: [
      ["polyphiles/promise-all", getThemeMenu("method", ["Promise.all"])],
    ],
  },
  {
    title: "Декораторы",
    children: [
      ["decorators/debounce", getThemeMenu("method", ["debounce()"])],
      ["decorators/once", getThemeMenu("method", ["once()"])],
      ["decorators/after", getThemeMenu("method", ["after()"])],
      ["decorators/throttle", getThemeMenu("method", ["throttle()"])],
      ["decorators/partial", getThemeMenu("method", ["partial()"])],
      ["decorators/pipe", getThemeMenu("method", ["pipe()"])],
    ],
  },
  {
    title: "Алгоритмы",
    children: [
      ["algoritms/anagram", emoji.items + "Анаграмма", "done"],
      ["algoritms/palindrome", emoji.items + "Палиндром", "done"],
      ["algoritms/compose", emoji.items + "Compose", "done"],
      ["algoritms/memoization", emoji.items + "Мемоизация"],
      ["algoritms/duplicate", emoji.items + "Duplicate Array"],
    ],
  },
  {
    title: "Объекты",
    children: [
      ["objects/objects", emoji.star + "Объекты"],
      ["objects/shallow-equal", "Shallow Equal", "done"],
      ["objects/deep-equal", "Deep Equal", "check"],
      ["objects/object-from-string", 'Объект из строки: "a.b.c.d"'],
      ["objects/tree-object", "Дерево из объекта"],
      ["objects/string-object", "Строка объектов", "check"],
    ],
  },
  {
    title: "Массивы",
    children: [
      ["arrays/arrays", emoji.star + "Массивы"],
      ["arrays/intersection-arrays", "Пересечение массивов", "done"],
      ["arrays/sort-odd", "Сортировка нечетных значений", "done"],
      [
        "arrays/max-count-repeat-elements",
        "Количество повторяющихся элементов",
      ],
      ["arrays/max-array-element", "Максимальный элемент массива"],
      ["arrays/array-sums", "Двумерный массив сумм"],
      ["arrays/array-average-value", "Получить среднюю оценку"],
      ["arrays/merge-sort", "MergeSort", "check"],
    ],
  },
  {
    title: "Асинхронность",
    children: [
      ["async/event-loop", emoji.star + "Event Loop", "check"],
      ["algoritms/retrier", "Retrier (запросы по URL)", "check"],
      ["algoritms/promise-make-request", "Promise Make Request"],
      ["algoritms/cancel-timeout", "setTimeout: отмена всех", "check"],
      ["algoritms/settimeout-for-var", "setTimeout: в for без let"],
      ["algoritms/promisification-function", "Промисификация функции"],
      ["algoritms/sequential-callbacks", "Последовательные коллбэки", "check"],
    ],
  },
  {
    title: "JavaScript",
    children: [
      ["js/data-types", emoji.star + "Типы данных"],
      ["js/strangeness", emoji.star + "Особенности"],
      ["js/map", "map"],
      ["js/floating-point", "Плавающая запятая"],
      ["js/undefined-check", 'Проверка на "undefined"'],
      [
        "js/equality-condition",
        getThemeMenu("method", ["a == True && a == False"]),
      ],
    ],
  },
  {
    title: "TypeScript",
    children: [["typescript/interface-recursion", "Рекурсия в Interface"]],
  },
  {
    title: "Общие темы",
    children: [
      ["custom/hoisting", emoji.items + "Всплытие", "check"],
      ["custom/closure", emoji.items + "Замыкания", "check"],
      ["custom/prototype", emoji.items + "Прототипы", "check"],
      ["custom/context", emoji.items + "Контекст", "check"],
      ["custom/currying", emoji.items + "Каррирование", "check"],
    ],
  },
  {
    title: "Общие задачи",
    children: [
      ["algoritms/sum-brackets", getThemeMenu("method", ["sum(1)(2)(3)"])],
      ["algoritms/closing-brackets", getThemeMenu("method", ["[]()&lt;&gt;"])],
      ["algoritms/sum-pyramid", "Сумма пирамиды"],
      ["algoritms/sum-sequence", "Сумма последовательности"],
      ["algoritms/function-count", "Функция считает свои вызовы"],
      ["algoritms/event-emitter", "EventEmitter", "check"],
      ["algoritms/series", "Series", "check"],
      ["algoritms/shop-queue", "Магазин с кассами", "check"],
      ["algoritms/three-statements", "3 утверждения", "check"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
