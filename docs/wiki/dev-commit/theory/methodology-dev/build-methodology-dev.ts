import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/methodology-dev/";
const title = "Методологии разработки";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [["methodology/atomic-design", "Atomic Design"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
