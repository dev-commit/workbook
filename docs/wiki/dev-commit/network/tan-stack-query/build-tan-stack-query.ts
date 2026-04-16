import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "network/tan-stack-query/";
const title = "TanStack Query";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
    ],
  },
  {
    title: "Общее",
    children: [["common/react-query-devtools", "ReactQuery Devtools"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
