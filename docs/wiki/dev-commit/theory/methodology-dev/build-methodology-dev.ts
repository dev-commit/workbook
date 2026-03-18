import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "theory/methodology-dev/";
const title = "Методологии";
const theme: TThemeTopics = "theory";

const topics: ISidebarTopics[] = [
  {
    title: "Методологии разработки ПО",
    children: [
      ["methodology/methodology", emoji.theory + "Методологии разработки"],
      ["methodology/fsd", "Feature-Sliced Design (FSD)"],
      ["methodology/fdd", "Feature-Driven Development (FDD)"],
      ["methodology/atomic-design", "Atomic Design", "check"],
    ],
  },
  {
    title: "Методологии AI",
    children: [
      ["ai/sdd", "Spec-Driven Development (SDD)"],
      ["ai/clear", "Фреймворк CLEAR", "check"],
      ["ai/schemes", "Схемы CRISPE, RISEN, APE", "check"],
    ],
  },
  {
    title: "Принципы",
    children: [
      ["principles/ddd", "Domain-Driven Design"],
      ["principles/sdlc", "SDLC"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
