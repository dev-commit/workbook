import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "common2/windows/";
const title = "Windows";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/shortcuts", "Keyboard shortcuts"],
      ["main/tasks", "Задачи"],
      ["main/install", "Установка Windows"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
