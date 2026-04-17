import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "main/typescript/";
const title = "TypeScript";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/usecases", emoji.code + "Use Cases"],
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      [
        "main/interface-vs-type",
        getThemeMenu("method", ["Interface"]) +
          " vs " +
          getThemeMenu("method", ["Type"]),
      ],
    ],
  },

  {
    title: "Типы данных",
    children: [
      ["types/types", emoji.theory + "Типы данных"],
      [
        "types/any-vs-unknown",
        getThemeMenu("method", ["any"]) +
          " vs " +
          getThemeMenu("method", ["unknown"]),
      ],
      ["types/string", getThemeMenu("method", ["string"])],
      ["types/array", getThemeMenu("method", ["array"])],
      ["types/function", getThemeMenu("method", ["function"])],
      ["types/promise", getThemeMenu("method", ["promise"])],
      ["types/object", getThemeMenu("method", ["object"])],
      ["types/any", getThemeMenu("method", ["any"])],
      ["types/never", getThemeMenu("method", ["never"])],
      ["types/typle", getThemeMenu("method", ["typle"])],
      ["types/null", getThemeMenu("method", ["null", "undefined"])],
      ["types/number", getThemeMenu("method", ["number"])],
      ["types/boolean", getThemeMenu("method", ["boolean"])],
    ],
  },
  {
    title: "Generics",
    children: [
      ["generics/info", emoji.theory + "Информация"],
      ["generics/main", emoji.fire + "Основное"],
      ["generics/function", "Стрелочная функция"],
      ["generics/object", "Дженерик для объекта"],
      ["generics/inheritance", "Наследование"],
      ["generics/interface", "Дженерик в interface"],
      [
        "generics/StringAndOptions",
        getThemeMenu("method", ["StringAndOptions"]),
      ],
    ],
  },
  {
    title: "Interface",
    children: [
      ["interface/main", emoji.items + "Основы"],
      ["interface/inherit", "Наследование интерфейсов"],
      ["interface/with-class", "Взаимодействие с классами"],
      ["interface/dynamic-key-obj", "Динамические ключи объекта"],
      ["interface/samples", "Примеры"],
    ],
  },
  {
    title: "Структуры",
    children: [
      ["type/type", emoji.fire + "Type"],
      ["type/combine", "Комбинация типов"],
      ["enum/main", emoji.fire + "Enum"],
      ["function/main", emoji.fire + "Function"],
      ["function/overload", "Перегрузка функций"],
      ["class/main", emoji.fire + "Class"],
      ["class/modificator", "Модификаторы полей"],
      ["class/abstract", "Абстрактные классы"],
      ["class/decorators", "Декораторы"],
    ],
  },
  {
    title: "Операторы",
    children: [
      ["operators/keyof", getThemeMenu("method", ["keyof"])],
      ["operators/typeof", getThemeMenu("method", ["typeof"])],
      ["operators/symbol-exclamation-mark", getThemeMenu("method", ["!"])],
    ],
  },
  {
    title: "Методы для Type",
    children: [
      ["methods/pick", getThemeMenu("method", ["Pick"])],
      ["methods/omit", getThemeMenu("method", ["Omit"])],
      ["methods/exclude", getThemeMenu("method", ["Exclude"])],
      ["methods/record", getThemeMenu("method", ["Record"])],
      ["methods/partial", getThemeMenu("method", ["Partial"])],
      ["methods/merge", getThemeMenu("method", ["Merge"])],
      ["methods/required", getThemeMenu("method", ["Required"])],
    ],
  },
  {
    title: "React",
    children: [
      ["react/types", emoji.items + "Типы в React"],
      ["react/component", getThemeMenu("method", ["Component"])],
      ["react/CSSProperties", getThemeMenu("method", ["CSSProperties"])],
      ["react/useState", getThemeMenu("method", ["useState"])],
      ["react/useRef", getThemeMenu("method", ["useRef"])],
      ["react/children", getThemeMenu("method", ["Children"])],
      ["react/react-router", getThemeMenu("method", ["react-router"])],
      ["react/setInterval", "setInterval в useRef"],
      ["react/services", "Описание сервисов"],
      ["react/samples", emoji.code + "Примеры"],
    ],
  },
  {
    title: "Примеры",
    children: [
      [
        "samples/string-for-object-key",
        emoji.star + "Передача строки для ключа объекта",
      ],
      ["samples/generics-typing", "Типизация через Дженерики"],
      ["samples/array-of-objects", "Массив объектов"],
      ["samples/type-argument", "Тип принимает агрумент"],
    ],
  },
  {
    title: "Прочее",
    children: [["other/guards", "Guards"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
