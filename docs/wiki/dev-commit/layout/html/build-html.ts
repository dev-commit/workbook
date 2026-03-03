import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "layout/html/";
const title = "HTML";
const theme: TThemeTopics = "html";

const topics: ISidebarTopics[] = [
  {
    title: "Теги",
    children: [
      ["tags/fieldset", getThemeMenu("method", ["fieldset", "legend"])],
      ["tags/details", getThemeMenu("method", ["details"])],
    ],
  },
  {
    title: "Категории",
    children: [["category/layout", "Разметка Layout"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
