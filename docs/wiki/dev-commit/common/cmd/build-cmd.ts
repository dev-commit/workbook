import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "docs/wiki/constants";

const path = rootPath + "common/cmd/";
const title = "CMD";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/command", "Команды"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
