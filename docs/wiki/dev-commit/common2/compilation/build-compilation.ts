import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "common2/compilation/";
const title = "Compilation";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Software",
    children: [
      ["software/telegram", "Telegram"],
      ["software/google-chrome", "Google Chrome"],
    ],
  },
  {
    title: "Web",
    children: [
      ["web/i18n", getThemeMenu("method", ["i18n", "L10n", "a11y"])],
      ["web/web-applications", "Виды веб-приложений"],
      ["web/frameworks", "Фреймворки"],
      ["web/webkit", "Браузерные движки"],
      ["web/evolution-web-design", "Эволюция веб-дизайна"],
    ],
  },
  {
    title: "Прочее",
    children: [
      ["other/specification-stage", "Стадии спецификации"],
      ["other/dictionary", "Словарь"],
      ["other/polyfill", "Полифиллы"],
      ["other/video-formats", "Видео форматы"],
      ["other/trash", "Свалка"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
