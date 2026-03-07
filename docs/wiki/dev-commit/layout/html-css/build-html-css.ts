import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/html-css/";
const title = "HTML | CSS";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
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
];

export default { topics, path, title, theme } satisfies IBuildTopics;
