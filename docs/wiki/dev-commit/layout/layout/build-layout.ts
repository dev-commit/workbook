import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/layout/";
const title = "Layout";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Элементы веб-страницы",
    children: [
      ["elements/img", "Изображения"],
      ["elements/form", "Элементы формы"],
      ["elements/link", "Ссылки"],
      ["elements/video", "Видео и аудио"],
      ["elements/table", "Таблицы"],
      ["elements/list", "Списки"],
    ],
  },
  {
    title: "Текст",
    children: [
      ["text/text", "Текст"],
      ["text/fonts", "Шрифты"],
    ],
  },
  {
    title: "Блочные элементы и позиционирование",
    children: [
      ["box-model/box-sizing", getThemeMenu("method", ["box-sizing"])],
      ["box-model/display", getThemeMenu("method", ["display"])],
      ["box-model/position", getThemeMenu("method", ["position", "z-index"])],
      ["box-model/width", getThemeMenu("method", ["width", "height"])],
      ["box-model/margin", getThemeMenu("method", ["margin", "padding"])],
      ["box-model/border", getThemeMenu("method", ["border"])],
      ["box-model/outline", getThemeMenu("method", ["outline"])],
    ],
  },
  {
    title: "События браузера",
    children: [
      [
        "browser-actions/scroll-behavior",
        getThemeMenu("method", ["scroll-behavior"]),
      ],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
