import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";

import { rootPath } from "../../constants";

const path = rootPath + "js/dayjs/";
const title = "Day.js";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/variants", getTopicSubtitle("variants")],
    ],
  },
  {
    title: "Методы",
    children: [["methods/format", getThemeMenu("method", ["format"])]],
  },
  {
    title: "Прочее",
    children: [["other/typescript", "TypeScript"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;

