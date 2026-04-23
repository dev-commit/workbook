import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "framework-react/react-app/";
const title = "React App";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Starter",
    children: [["main/new-project", "Новый проект"]],
  },
  {
    title: "Структура файлов",
    children: [
      ["file-structure/structure", "Структура"],
      ["file-structure/types", "📂 src › 📂 types"],
      ["file-structure/services", "📂 src › 📂 services"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
