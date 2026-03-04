import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/css/";
const title = "CSS";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Единицы измерения",
    children: [
      ["sizes/info", getTopicSubtitle("info")],
      ["sizes/px", "px и %"],
      ["sizes/rem", "em и rem"],
      ["sizes/viewport", "viewport"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
