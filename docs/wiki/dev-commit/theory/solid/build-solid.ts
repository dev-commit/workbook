import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "theory/solid/";
const title = "SOLID";
const theme: TThemeTopics = "theory";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Principles",
    children: [
      ["principles/1-srp", "1. Single Responsibility", "done"],
      ["principles/2-ocp", "2. Open Closed"],
      ["principles/3-lsp", "3. Liskóv Substitution"],
      ["principles/4-isp", "4. Interface Segregation"],
      ["principles/5-dip", "5. Dependency Inversion"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
