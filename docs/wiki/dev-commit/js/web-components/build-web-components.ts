import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "js/web-components/";
const title = "Web Components";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
    ],
  },
  {
    title: "Элементы",
    children: [
      ["elements/custom-elements", "1. Custom Elements"],
      ["elements/shadow-dom", "2. Shadow DOM"],
      ["elements/html-templates", "3. HTML Templates"],
      ["elements/html-import", "4. HTML Import"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
