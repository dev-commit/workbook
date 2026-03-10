import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "data/info/";
const title = "Информация";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Roadmaps",
    children: [
      ["roadmaps/react-frontend-developer", "React Frontend Developer"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
