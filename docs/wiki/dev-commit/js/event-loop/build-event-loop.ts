import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "js/event-loop/";
const title = "V8 | Event Loop";
const theme: TThemeTopics = "accent";

const topics: ISidebarTopics[] = [
  {
    title: "Event Loop",
    children: [
      ["main/info", getTopicSubtitle("info")],
      ["main/runtime", emoji.star + "Движок V8"],
      ["main/tasks", emoji.star + "Виды задач"],
    ],
  },
  {
    title: "Примеры на Event Loop",
    children: [
      [
        "samples/addEventListener",
        getThemeMenu("method", ["addEventListener"]),
      ],
      ["samples/onClick", getThemeMenu("method", ["onClick"])],
      ["samples/other", "Прочее"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
