import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "node-js/nest-js/";
const title = "Nest.js";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
    ],
  },
  {
    title: "Элементы",
    children: [
      ["elements/structure", emoji.fire + "Структура"],
    ],
  },
  {
    title: "1. Controller",
    children: [
      ["controller/http-methods", "HTTP-методы"],
      ["controller/url-params", "Динамические параметры в URL"],
      ["controller/redirect", "Редирект"],
      ["controller/request", "Request и Response"],
    ],
  },
  {
    title: "2. Service",
    children: [
      ["service/structure", emoji.star + "Структура"],
    ],
  },
  {
    title: "3. Module",
    children: [
      ["module/structure", emoji.star + "Структура"],
    ],
  },
  {
    title: "Инструменты",
    children: [
      ["libs/cli", "Nest CLI"],
      ["libs/mongodb", "Mongodb"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
