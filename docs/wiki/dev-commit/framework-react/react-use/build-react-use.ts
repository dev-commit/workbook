import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-use/";
const title = "React Use";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основы",
    children: [["main/info", getTopicSubtitle("info")]],
  },
  {
    title: "Хуки",
    children: [["hooks/useToggle", getThemeMenu("method", ["useToggle"])]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
