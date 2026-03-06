import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/html/";
const title = "HTML";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Теги",
    children: [
      ["tags/fieldset", getThemeMenu("method", ["fieldset", "legend"])],
      ["tags/details", getThemeMenu("method", ["details"])],
      ["tags/iframe", getThemeMenu("method", ["iframe"])],
      [
        "tags/datalist",
        getThemeMenu("method", ["datalist", "option"]),
        "check",
      ],
    ],
  },
  {
    title: "Категории",
    children: [["category/layout", "Элементы разметки Layout"]],
  },
  {
    title: "Атрибуты",
    children: [
      ["attr/aria-label", getThemeMenu("method", ["aria-label"])],
      ["attr/tabindex", getThemeMenu("method", ["tabindex"])],
    ],
  },
  {
    title: "Элементы веб-страницы",
    children: [
      ["elements/img", "Изображения"], // check
      ["elements/form", "Элементы формы"],
      ["elements/link", "Ссылки"], // check
      ["elements/video", "Видео и аудио"],
      ["elements/table", "Таблицы"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
