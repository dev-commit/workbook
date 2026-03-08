import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/sass/";
const title = "Sass";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "",
    children: [["main/sass", "Препроцессор Sass"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
