import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/methodology-dev/";
const title = "Методологии разработки";
const theme: TThemeTopics = "theory";

const topics: ISidebarTopics[] = [
  {
    title: "Методологии разработки ПО",
    children: [["methodology/atomic-design", "Atomic Design", "check"]],
  },
  {
    title: "Принципы",
    children: [["principles/sdd", "Spec-Driven Development (SDD)"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
