import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/js-object/";
const title = "Object";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/spread-obj", emoji.fire + "Spread-оператор Obj (ES-2018)"],
      ["main/destructive-obj", emoji.fire + "Деструктуризация Obj (ES6)"],
    ],
  },
  {
    title: "Use Cases",
    children: [
      ["use-cases/add-prop-check", "Добавить свойство с проверкой"],
    ],
  },
  {
    title: "Методы",
    children: [
      ["methods/object-create", getThemeMenu("method", ["Object.create"])],
      ["methods/object-assign", getThemeMenu("method", ["Object.assign"])],
      ["methods/object-entries", getThemeMenu("method", ["Object.entries"])],
      ["methods/object-from-entries", getThemeMenu("method", ["Object.fromEntries"])],
      ["methods/object-values", getThemeMenu("method", ["Object.values"])],
      ["methods/object-keys", getThemeMenu("method", ["Object.keys"])],
      ["methods/object-observe", getThemeMenu("method", ["Object.observe"])],
      ["methods/set-prototype-of", getThemeMenu("method", ["Object.setPrototypeOf"])],
      ["methods/get-prototype-of", getThemeMenu("method", ["Object.getPrototypeOf"])],
      ["methods/is-prototype-of", getThemeMenu("method", ["isPrototypeOf"])],
      ["methods/instanceof", getThemeMenu("method", ["instanceof"])],
    ],
  },
  {
    title: "Общее",
    children: [
      ["common/for", "Перебор объекта"],
      ["common/check-property", "Проверка наличия свойства"],
      ["common/descriptor", "Дескрипторы свойств"],
      ["common/extends", "Расширяемость объектов"],
    ],
  },
  {
    title: "Преобразования объектов",
    children: [
      ["conversion/logical", "Логическое"],
      ["conversion/toString-vs-valueOf", emoji.star + "toString vs valueOf", "done"],
      ["conversion/toString", getThemeMenu("method", ["toString"])],
      ["conversion/valueOf", getThemeMenu("method", ["valueOf"])],
      ["conversion/toPrimitive", getThemeMenu("method", ["Symbol.toPrimitive"])],
    ],
  },
  {
    title: "Примеры",
    children: [
      ["samples/key-remove", emoji.fire + "Удаление ключа"],
      ["samples/sort-elements-obj", emoji.items + "Сортировка элементов массива"],
      ["samples/flat-array-from-obj", emoji.items + "Плоский массив из объекта"],
      ["samples/setting-object-properties", emoji.items + "Задание свойств объекта"],
      ["samples/methods-various-obj", emoji.items + "Метод для разных объектов"],
      ["samples/return-obj", emoji.items + "Функция, возвращающая объект"],
    ],
  },
  {
    title: "Прочее",
    children: [
      ["other/literal-notation", emoji.code + "Литеральная нотация"],
      ["other/compare", emoji.items + "Сравнение объектов"],
      ["other/constructor", "Конструктор создания объекта"],
      ["other/prototype", "Прототип"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
