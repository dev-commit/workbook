import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

// TODO:
const path = rootPath + "theory/code-style/";
const title = "Code Style";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Код",
    children: [["code/naming-conventions", "Соглашения об именованиях"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
