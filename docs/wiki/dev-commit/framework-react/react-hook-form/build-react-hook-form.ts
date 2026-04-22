import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-hook-form/";
const title = "React Hook Form";
const theme: TThemeTopics = "react";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [["main/info", getTopicSubtitle("info")]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
