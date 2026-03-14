import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/css-grid/";
const title = "CSS Grid";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "",
    children: [
      // ["main/info", "Тема"],
      // ["main/info", "Тема"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
