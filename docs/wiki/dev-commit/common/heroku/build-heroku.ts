import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "common/heroku/";
const title = "Heroku";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/algoritm", "Алгоритм"],
      ["main/use", getTopicSubtitle("use")],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
