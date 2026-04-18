import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/zustand/";
const title = "Zustand";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/install", getTopicSubtitle("install")],
      ["main/use", getTopicSubtitle("use")],
    ],
  },
  {
    title: "API",
    children: [
      ["api/useStore", getThemeMenu("method", ["useStore"])],
      ["api/create", getThemeMenu("method", ["create"])],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
