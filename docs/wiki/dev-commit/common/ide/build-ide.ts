import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/ide/";
const title = "IDE";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "VSCode",
    children: [["vscode/plugins", "Плагины"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
