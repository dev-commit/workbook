import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "node-js/express/";
const title = "Express";
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
    title: "Маршрутизация",
    children: [
      ["routing/structure", emoji.code + "Структура"],
      ["routing/routes", emoji.code + "Маршрутизация"],
      ["api/get", getThemeMenu("method", ["get()"])],
      ["api/use", getThemeMenu("method", ["use()"])],
    ],
  },
  {
    title: "Элементы",
    children: [["elements/middleware", "Middleware"]],
  },
  {
    title: "Шаблонизатор EJS",
    children: [
      ["template-ejs/info", getTopicSubtitle("info")],
      ["template-ejs/install", getTopicSubtitle("install")],
      ["template-ejs/structure", emoji.fire + "Структура"],
      ["template-ejs/tags", emoji.star + "Tags"],
      ["template-ejs/static-files", emoji.star + "Статичные файлы (CSS, etc.)"],
    ],
  },
  {
    title: "Шаблонизатор Express Handlebars",
    children: [
      ["template-express-handlebars/info", getTopicSubtitle("info")],
      ["template-express-handlebars/install", getTopicSubtitle("install")],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
