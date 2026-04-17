import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-vue/vue-router/";
const title = "Vue Router";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/src-script", "Подключение через &lt;script&gt;"],
      ["main/src-npm", "Подключение через NPM"],
      ["main/server-configuration", "Конфигурование сервера"],
    ],
  },
  {
    title: "Варианты",
    children: [
      ["variants/path-static", "Статический путь"],
      ["variants/path-dynamic", "Динамический путь"],
      ["variants/path-comparison", "Сопоставление путей"],
      ["variants/navigation", "Программная навигация"],
      ["variants/passing-props", "Входные параметры (props)"],
      ["variants/navigation-guards", "Навигационные хуки"],
      ["variants/scroll-behavior", "Поведение прокрутки страницы"],
      ["variants/lazy-loading", "Леннивая загрузка маршрутов"],
      ["variants/active-link", "Стилизация активной ссылки"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
