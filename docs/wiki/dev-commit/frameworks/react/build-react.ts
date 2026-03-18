import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

// TODO:
const path = rootPath + "frameworks/react/";
const title = "React";
const theme: TThemeTopics = "vue";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/ecosystem", emoji.theory + "Экосистема"],
      ["main/ecosystem-ui-kit", emoji.theory + "UI-библиотеки"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
