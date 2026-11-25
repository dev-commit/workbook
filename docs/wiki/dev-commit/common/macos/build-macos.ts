import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "docs/wiki/constants";

const path = rootPath + "common/macos/";
const title = "MacOS";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/shortcuts", "Keyboard shortcuts"],
      ["main/flash-cards", "Flash Cards"],
    ],
  },
  {
    title: "Cases",
    children: [
      ["cases/dot-folder", "Директория с точки"],
      ["cases/pass-zip", "Установка пароля на Zip-архив"],
      ["cases/time-zone", "Смена часового пояса"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
