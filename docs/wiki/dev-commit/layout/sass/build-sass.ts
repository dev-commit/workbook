import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/sass/";
const title = "Sass";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Операции",
    children: [
      ["operations/variables", "Переменные"],
      ["operations/cascade", "Вложенности"],
      ["operations/color", "Операции над цветами"],
      ["operations/math", "Математические операции"],
    ],
  },

  {
    title: "Функции",
    children: [
      ["functions/mixin", getThemeMenu("method", ["@mixin"])],
      ["functions/extend", getThemeMenu("method", ["@extend"])],
      ["functions/import", getThemeMenu("method", ["@import"])],
      ["functions/each", getThemeMenu("method", ["@each"])],
      ["functions/at-root", getThemeMenu("method", ["@at-root"])],
      ["functions/if-else", getThemeMenu("method", ["@if", "@else"])],
      ["functions/for", getThemeMenu("method", ["@for", "@while"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
