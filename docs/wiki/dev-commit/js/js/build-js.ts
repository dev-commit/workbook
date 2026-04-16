import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js/";
const title = "JavaScript";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Типизация",
    children: [
      ["typing/typing", emoji.theory + "Типизация"],
      ["typing/type-data", emoji.theory + "Типы данных"],
      ["typing/type-casting", emoji.code + "Сравнение типов"],
      ["typing/type-conversion", "Преобразование типов"],
      ["typing/typeof", getThemeMenu("method", ["typeof"])],
      ["typing/symbol", "Symbol (ES6)"],
    ],
  },
  {
    title: "Всплытие и переменные",
    children: [
      ["variables/hoisting", emoji.fire + "Всплытие"],
      ["variables/variables", getThemeMenu("method", ["var", "let", "const"])],
      ["variables/variables-create", emoji.theory + "Создание переменных"],
    ],
  },
  {
    title: "Структуры данных",
    children: [
      ["data-structures/number", getThemeMenu("method", ["Number"])],
      ["data-structures/json", getThemeMenu("method", ["JSON"])],
      [
        "data-structures/iterators",
        getThemeMenu("method", ["Iterators (ES6)"]),
      ],
      ["data-structures/map", getThemeMenu("method", ["Map", "WeakMap"])],
      ["data-structures/set", getThemeMenu("method", ["Set", "WeakSet"])],
      ["data-structures/date-time", getThemeMenu("method", ["Date"])],
    ],
  },
  {
    title: "ES6+",
    children: [
      [
        "es6+/nullish-coalescing-operator",
        "Оператор " + getThemeMenu("method", ["??"]),
      ],
      ["es6+/optional-chaining", "Оператор " + getThemeMenu("method", ["?."])],
    ],
  },
  {
    title: "Основное",
    children: [
      ["main/context", emoji.fire + "Контекст"],
      [
        "main/bind",
        emoji.fire + getThemeMenu("method", ["bind", "call", "apply"]),
      ],
      ["main/if-case", getThemeMenu("method", ["if", "case"])],
      ["main/ternary-operator", "Тернарные операторы"],
    ],
  },
  {
    title: "API",
    children: [
      ["api/math", getThemeMenu("method", ["Math"])],
      ["api/notifications-api", getThemeMenu("method", ["Notifications"])],
      ["api/console", getThemeMenu("method", ["console"])],
      ["api/eval", getThemeMenu("method", ["eval"])],
    ],
  },
  {
    title: "Теория",
    children: [
      ["theory/garbage-collection", "Сборщик мусора"],
      ["theory/ecmascript", "ECMAScript"],
    ],
  },
  {
    title: "Дополнительно",
    children: [
      ["other/jsdoc", "Документирование"],
      ["other/exceptions", "Исключения"],
      ["other/object-wrappers", "Autoboxing (Object Wrappers)"],
      ["other/pattern-string", "Шаблонные строки (ES6)"],
      ["other/proxy", "Proxy (ES6)"],
      ["other/web-workers", "Web Workers"],
      ["other/asynchronous-scripts", "Асинхронные скрипты: defer/async"],
      ["other/method-chaining", "Цепные вызовы методов"],
      ["other/strict-mode", "Strict Mode"],
      ["other/samples", "Примеры"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
