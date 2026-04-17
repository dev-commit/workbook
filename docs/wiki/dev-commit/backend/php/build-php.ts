import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "backend/php/";
const title = "PHP";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/variables", "Переменные"],
      ["main/cycle", "Циклы"],
      ["main/array", "Массивы"],
      ["main/function", "Функции"],
      ["main/if", getThemeMenu("method", ["if-else"])],
      ["main/switch", getThemeMenu("method", ["switch-case"])],
    ],
  },
  {
    title: "Прочее",
    children: [
      ["other/function-php", "Функции PHP"],
      ["other/server", "Суперглобальный массив SERVER"],
      ["other/open-server", "PHP Open Server"],
    ],
  },
  {
    title: "Примеры",
    children: [
      ["samples/files", emoji.code + "Файлы и директории"],
      ["samples/image-loader", emoji.code + "Изображения"],
      ["samples/email", emoji.code + "Отправка email"],
      ["samples/json-server", emoji.code + "JSON Server"],
    ],
  },
  {
    title: "MySQL",
    children: [
      ["mysql/mysql", "Работа с MySQL"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
