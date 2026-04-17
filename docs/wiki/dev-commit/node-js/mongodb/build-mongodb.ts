import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "node-js/mongodb/";
const title = "MongoDB";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
    ],
  },
  {
    title: "Пакеты",
    children: [
      ["packages/mongoose", getThemeMenu("method", ["Mongoose"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
