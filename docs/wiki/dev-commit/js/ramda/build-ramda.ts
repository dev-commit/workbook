import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "js/ramda/";
const title = "Ramda";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Методы",
    children: [
      ["methods/path", getThemeMenu("method", ["path", "pathOr"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
