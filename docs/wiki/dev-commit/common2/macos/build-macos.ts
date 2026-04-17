import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common2/macos/";
const title = "MacOS";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/shortcuts", "Keyboard shortcuts"],
      ["main/versions", emoji.theory + "Версии MacOS"],
      ["main/tilda", emoji.theory + "Символ ~"],
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
