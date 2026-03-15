import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "network/network/";
const title = "Network";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "API",
    children: [["api/request", "Варианты Request"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
